import os

from flask import Flask, request, jsonify, abort, send_file
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename

from kmeans.preprocessing.preprocess import kmeans_preprocess
from kmeans.kmeans import kmeans_clustering

ROOT_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__)

cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['DATASET_DIR'] = ROOT_DIR + '/kmeans/dataset/'

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in {'csv'}

@app.route('/api/upload-dataset', methods=['POST'])
def upload_dataset():
    if(request.method == 'POST'):
        if 'csvFile' not in request.files:
            return jsonify(error='No file found!'), 400

        file = request.files['csvFile']

        if file.filename == '':
            return jsonify(error='No file was selected!'), 400

        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['DATASET_DIR'], filename))

            return jsonify(success='Uploaded Dataset Successfully!'), 200

@app.route('/api/preprocess-dataset', methods=['GET'])
def preprocess_dataset():
    if(request.method == 'GET'):
        kmeans_preprocess(app.config['DATASET_DIR'])
        return send_file(app.config['DATASET_DIR']+'preprocessed.json')

@app.route('/api/cluster-dataset', methods=['POST'])
def cluster_dataset():
    if(request.method == 'POST'):
        parameters = request.get_json()
        result = kmeans_clustering(app.config['DATASET_DIR'], parameters['k'], parameters['p'])
        return jsonify(result), 200

if __name__ =="__main__":  
    app.run(debug = True)  