import subprocess
import time
from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all origins
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

def run_speed_test():
    start_time = time.time()
    while time.time() - start_time <= 10:
        speed_result = subprocess.run(['speedtest', '--json'], capture_output=True, text=True)
        socketio.emit('speed', speed_result.stdout.strip())
        time.sleep(2)

@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('connect')
def test_connect():
    print('Client connected')
    socketio.start_background_task(run_speed_test)

if __name__ == '__main__':
    socketio.run(app, debug=True, port=5001)

