from flask import Flask, flash, request, redirect, url_for, jsonify, send_file
from werkzeug.utils import secure_filename
import io, json
import base64
from PIL import Image
import os
import subprocess
from flask_cors import CORS, cross_origin
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def _write_to_file(data):
    data_dict = json.loads(data)

    print(data_dict['value'])
    decoded_data = base64.b64decode(data_dict['value']).decode("utf-8")
    decoded_data = bytes(decoded_data, "utf-8").decode("unicode_escape").split("\n")
    print(decoded_data)
    
    with open('code.py', 'w') as f:
        for item in decoded_data:
            f.write("%s\n" % item)
@cross_origin()
@app.route('/uml', methods=['POST'])
def generate_uml():
    if request.method == 'POST':
        # check if the post request has the file part
        if not request.data:
            flash('Server received an empty code string.')
            return redirect(request.url)
        _write_to_file(request.data)
        subprocess.call(['pyreverse', 'code.py'])
        subprocess.call(
            ['dot', '-Tpng', 'classes.dot', '-o', 'output.png'])
        img = Image.open("output.png")
        rawBytes = io.BytesIO()
        img.save(rawBytes, "PNG")
        rawBytes.seek(0)
        img_base64 = base64.b64encode(rawBytes.read())
        print(img_base64)


        return jsonify({'status': str(img_base64)})

    else:
        return "Request Method not supported"
@cross_origin()
@app.route('/callgraph', methods=['POST'])
def generate_callgraph():
    if request.method == 'POST':
        # check if the post request has the file part
        if not request.data:
            flash('Server received an empty code string.')
            return redirect(request.url)
        subprocess.call(['rm', 'code.py'])
        _write_to_file(request.data)

        subprocess.call(
            ['pycallgraph', 'graphviz', '--' ,'./code.py'])
        img = Image.open("pycallgraph.png")
        rawBytes = io.BytesIO()
        img.save(rawBytes, "PNG")
        rawBytes.seek(0)
        img_base64 = base64.b64encode(rawBytes.read())
        print(img_base64)

        return jsonify({'status': str(img_base64)})

    else:
        return "Request Method not supported"
    