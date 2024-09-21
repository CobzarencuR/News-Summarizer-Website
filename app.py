import time
import os
from flask import Flask, render_template, send_from_directory, send_file, url_for, redirect, session

app = Flask(__name__)

import json
from flask import jsonify, request

json_object = []

def receive_data():
    # Simulate receiving JSON packet (replace this with your actual data source)
    news_data = request.get_json()
    global json_object
    json_object.append(news_data)


@app.route('/post_data_to_front', methods = ['POST'])
def post_news_data():
    receive_data()
    return jsonify(success=True)

@app.route('/get_data_from_flask', methods =['Get'])
def get_json():
    global json_object
    new_content = json_object
    json_object = []
    return new_content

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/team')
def team():
    return render_template('team.html')

@app.route('/Image/RobertC.jpeg')
def serve_image(filename):
    return send_from_directory(os.path.join(app.root_path,'static','Image'), filename)


if __name__ == '__main__':
    app.run(debug=True, port=5000)
