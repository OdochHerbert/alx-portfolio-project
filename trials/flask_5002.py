from flask import Flask, jsonify
import subprocess

app = Flask(__name__)

@app.route('/get_network_data', methods=['GET'])
def get_network_data():
    command = "iftop -i wlp1s0 -t -s 10 -L 1"
    try:
        result = subprocess.run(command, shell=True, check=True, capture_output=True, text=True)
        return jsonify({"output": result.stdout})

    except subprocess.CalledProcessError as e:
        return jsonify({"error": str(e)})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5002)

