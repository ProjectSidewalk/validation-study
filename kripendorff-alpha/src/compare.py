import sys
sys.path.append("..") 

from IPython.core.display import display,HTML

from src.cluster import *
from src.colors import *

def path_to_image_html(path):
    return '<img src="'+ path + '" width="480" >'

def compare_cluster(cluster_id,df,label_type_i,folder):
    df1 = cluster_label_type_at_index(df,label_type_i)[2]
    df1['img_url'] = df1.apply(lambda x: folder+"label_id_"+str(x.label_id)+".jpg", axis=1)
    df2 = df1.loc[df1['cluster_id'] == cluster_id]
    df3 = df2 [['username','label_type','severity','tag_list','cluster_id','img_url']]
    df3['img']= df3.apply(lambda x: path_to_image_html(x.img_url), axis=1)
    df3 = df3.set_index(['username'])
    df4=df3.T
    return display(HTML(df4.to_html(escape=False)))