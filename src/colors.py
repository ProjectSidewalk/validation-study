import sys
sys.path.append("..") 

label_colors ={'Crosswalk':'#FABF1C',
               'CurbRamp':'#90C31F',
               'NoCurbRamp':'#E679B6',
               'NoSidewalk':'#BE87D8',
               'Obstacle' :'#78B0EA',
               'Occlusion':'#B3B3B3',
               'Other':'#B3B3B3',
               'Signal':'#63C0AB',
               'SurfaceProblem':'#F68D3E'}

def get_label_colors(geof):
    label_list = geof['label_type'].unique().tolist()
    label_list.sort()
    j = []
    for i in label_list:
        j.append(label_colors[i])
    return j