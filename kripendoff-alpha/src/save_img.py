import os
import requests

import sys
sys.path.append("..") 

def download(row,root_folder,im_extension):
    filename = os.path.join(root_folder,"label_id_"+
                           str(row.label_id) + im_extension)
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    url = row.gsv_url
    print(f"Downloading {url} to {filename}")
    r = requests.get(url, allow_redirects=True)
    with open(filename, 'wb') as f:
        f.write(r.content)