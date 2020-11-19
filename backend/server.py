from flask import Flask, flash, request, redirect, url_for, jsonify, send_file
from werkzeug.utils import secure_filename
import io
import base64
from PIL import Image
import os
import subprocess
UPLOAD_FOLDER = 'user_files'
app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

ALLOWED_EXTENSIONS = {'py'}


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        # if user does not select file, browser also
        # submit an empty part without filename
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(filepath)
            subprocess.call(['pyreverse', filepath])
            filename_non_prefixed = filename.split('.')
            filename_non_prefixed = filename_non_prefixed[0:len(
                filename_non_prefixed)-1]
            filename = ''.join(filename_non_prefixed)
            print(filename)
            subprocess.call(
                ['dot', '-Tpng', 'classes.dot', '-o', filename+'.png'])
            img = Image.open(filename+".png")
            rawBytes = io.BytesIO()
        img.save(rawBytes, "PNG")
        rawBytes.seek(0)
        img_base64 = base64.b64encode(rawBytes.read())
        print(img_base64)
#        return send_file(filename+".png", mimetype='image/png')

        return jsonify({'status': str(img_base64)})

                                filename=filename))
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''
