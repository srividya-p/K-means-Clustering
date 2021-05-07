import pandas as pd
import math
import random

from utils.distance_formulas import euclidian_distance, manhattan_distance

def empty_dict():
    result = dict()
    for i in range(k):
        result[i] = []
    return result

dataset = pd.read_csv("./dataset/clustering.csv")
k = int(input("Enter number of centers: "))

if(k > len(dataset)):
    print("Number of centers is greater than number of objects!")
    exit()

centers = [dataset.iloc[c].to_list() for c in random.sample(range(1, len(dataset)), k)]

is_centers_same = False
prev_centers = None
while (not is_centers_same):
    result = empty_dict()
    for i in dataset.index:
        distances = []
        for c in centers:
            distances.append(manhattan_distance(dataset.iloc[i].to_list(), c))
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

for r in result:
    print('Cluster '+str(r+1)+' - ', result[r])
