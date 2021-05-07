import pandas as pd
import numpy as np

def kmeans_preprocess():
    dataset = pd.read_csv("../dataset/original.csv")

    #Convert all string values to NaN
    dataset = dataset.apply(lambda x: pd.to_numeric(x, errors = 'coerce'))

    #Store the head of the dataset in a list
    head = list(dataset.columns.values)
    #Remove colums with only NaN
    for h in head:
        if(dataset[h].isna().sum() == len(dataset)):
            del dataset[h]    

    #Replace NaN with the mean 
    dataset = dataset.fillna(dataset.mean())

    dataset.to_csv('../dataset/preprocessed.csv', index=False)
kmeans_preprocess()