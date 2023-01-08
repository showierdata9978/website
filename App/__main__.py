# import a static site deployment tool
from flask import Flask, send_from_directory, request, jsonify

app = Flask(__name__)

usrstate = {}

@app.route('/')
def index():
    return send_from_directory('Public', 'index.html')

@app.route('/<path:path>')
def static_file(path):
    return send_from_directory('Public', path)

@app.route('/getusrstate')
def getusrstate():
    return jsonify(usrstate[request.remote_addr])

@app.route('/setusrstate', methods=['POST'])
def setusrstate():
    usrstate[request.remote_addr].update(request.json)
    return 'OK'



if __name__ == '__main__':
    app.run(port=8000)