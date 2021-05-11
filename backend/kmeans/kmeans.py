import pandas as pd

import random

from .util_functions.distance_formulas import distance
from .util_functions.initialisation import empty_dict

def kmeans_clustering(DATASET_DIR, k, p):
    dataset = pd.read_csv(DATASET_DIR+"preprocessed.csv")

    if(k > len(dataset)):
        raise ValueError("Number of centers is greater than number of objects!")

    centers = [dataset.iloc[c].to_list() for c in random.sample(range(1, len(dataset)), k)]
    original_centers = centers [:]

    is_centers_same = False
    prev_centers = None
    while (not is_centers_same):
        result = empty_dict(k)
        for i in dataset.index:
            distances = []
            for c in centers:
                distances.append(distance(dataset.iloc[i].to_list(), c, p))
            result[distances.index(min(distances))].append(dataset.iloc[i].to_list())
 
        prev_centers = centers[:]
        for c in range(len(centers)):
            transpose_cluster = [[result[c][j][i] for j in range(len(result[c]))] for i in range(len(result[c][0]))]
            new_center = []
            for t in transpose_cluster:
                new_center.append(sum(t)/len(t))
            centers[c] = new_center
    
        if(prev_centers == centers):
            is_centers_same = True

        return {
            'clusters': result,
            'original_centers': original_centers
        }
