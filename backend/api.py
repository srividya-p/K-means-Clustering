import os

from flask import Flask, request, jsonify, abort
from flask_cors import CORS, cross_origin

from kmeans.preprocessing.preprocess import kmeans_preprocess

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
DATASET_DIR = ROOT_DIR + '/kmeans/dataset/'

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/api/upload-dataset')
def upload_dataset():
    pass

@app.route('/api/preprocess-dataset')
def preprocess_dataset():
    kmeans_preprocess(DATASET_DIR)
    pass

@app.route('/api/cluster-dataset')
def cluster_dataset():
    pass

if __name__ =="__main__":  
    app.run(debug = True)  