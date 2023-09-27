#!/usr/bin/env python
# coding: utf-8

import numpy as np
from scipy import stats
import math
from scipy.cluster.hierarchy import linkage, fcluster
from scipy.spatial.distance import pdist
import sys
from haversine import haversine
import pandas as pd

def custom_dist(u, v):
    if u[2] == v[2]:
        return sys.float_info.max
    else:
        return haversine([u[0], u[1]], [v[0], v[1]])

thresholds = {'CurbRamp': 0.0075,
                      'NoCurbRamp': 0.0075,
                      'SurfaceProblem': 0.01,
                      'Obstacle': 0.01,
                      'NoSidewalk': 0.01,
                      'Crosswalk': 0.01,
                      'Signal': 0.01,
                      'Occlusion': 0.01,
                      'Other': 0.01,
                      'Problem': 0.01}

def cluster(labels, label_type, thresholds):

    # Makes a normal dist matrix for a single user, but uses special dist function for multi-user clustering that
    # prevents the same user's attributes from being clustered together.
    dist_matrix = pdist(np.array(labels[['lat', 'lng', 'username']].values), custom_dist)
    link = linkage(dist_matrix, method='complete')
    curr_type = labels['label_type'].values

    # Copies the labels dataframe and adds a column to it for the cluster id each label is in.
    labelsCopy = labels.copy()
    labelsCopy.loc[:,'cluster_id'] = fcluster(link, t=thresholds[label_type], criterion='distance')

    # Cuts tree so that only labels less than clust_threth kilometers apart are clustered.
    clusters = labelsCopy.groupby('cluster_id')

    # Computes the center of each cluster and assigns temporariness and severity.
    cluster_list = [] # list of tuples (label_type, cluster_num, lat, lng, severity, temporary).
    for clust_num, clust in clusters:
        #ave_pos = np.mean(clust['coords'].tolist(), axis=0) # use ave pos of clusters.
        #ave_sev = None if pd.isnull(clust['severity']).all() else int(round(np.median(clust['severity'][~np.isnan(clust['severity'])])))
        #ave_temp = None if pd.isnull(clust['temporary']).all() else bool(round(np.mean(clust['temporary'])))

        cluster_list.append((curr_type, clust_num))

    cluster_df = pd.DataFrame(cluster_list, columns=['label_type', 'cluster_id'])

    return (cluster_df, labelsCopy)


# Pick which label types should be included in clustering, and which should be included in the "Problem" type.
label_types = ['CurbRamp', 'NoSidewalk', 'Problem', 'Occlusion', 'SurfaceProblem', 'Obstacle', 'Other', 'NoCurbRamp', 'Crosswalk', 'Signal']
problem_types = ['SurfaceProblem', 'Obstacle']

# These are the columns required in the POST requests for the labels and clusters, respectively.
label_cols = ['label_id', 'label_type', 'cluster_id']
cluster_cols = ['label_type', 'cluster_id', 'lat', 'lng', 'severity', 'temporary']


def cluster_label_type_at_index(label_data,i):
        clusters_for_type_i = pd.DataFrame(columns=cluster_cols)
        labels_for_type_i = pd.DataFrame(columns=label_cols)

        label_type = label_types[i]
        if label_type == 'Problem':
            type_data = label_data[label_data.label_type.isin(problem_types)]
        else:
            type_data = label_data[label_data.label_type == label_type]

        # If there are >1 labels, we can do clustering. Otherwise just copy the 1 (or 0) labels.
        if type_data.shape[0] > 1:
            (clusters_for_type_i, labels_for_type_i) = cluster(type_data, label_type, thresholds)
        elif type_data.shape[0] == 1:
            labels_for_type_i = type_data.copy()
            labels_for_type_i.loc[:,'cluster_id'] = 1 # Gives the single cluster a cluster_id of 1.
            labels_for_type_i.loc[:,'label_type'] = label_type # Gives Problem type if needed.
            clusters_for_type_i = labels_for_type_i.filter(items=cluster_cols)

        return (label_type, clusters_for_type_i, labels_for_type_i)