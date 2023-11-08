from flask import Flask, jsonify
import subprocess
import re
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/get_network_data', methods=['GET'])
def get_network_data():
    command = "iftop -i wlp1s0 -t -s 5 -L 1"
    try:
        output = subprocess.check_output(command, shell=True, text=True)
        output_lines = output.split('\n')

        rx = 0
        tx = 0
        for line in output_lines:
            if "Total send rate:" in line:
                tx_match = re.search(r'Total send rate:\s+([\d.]+)(\w+)', line)
                if tx_match:
                    tx_value = float(tx_match.group(1))
                    tx_unit = tx_match.group(2)
                    if tx_unit.lower() == 'kb':
                        tx = tx_value
                    elif tx_unit.lower() == 'mb':
                        tx = tx_value * 1024

            elif "Total receive rate:" in line:
                rx_match = re.search(r'Total receive rate:\s+([\d.]+)(\w+)', line)
                if rx_match:
                    rx_value = float(rx_match.group(1))
                    rx_unit = rx_match.group(2)
                    if rx_unit.lower() == 'kb':
                        rx = rx_value
                    elif rx_unit.lower() == 'mb':
                        rx = rx_value * 1024

        data = {"output": output, "rx": rx, "rx_unit": "kb", "tx": tx, "tx_unit": "kb"}
        return jsonify(data)

    except subprocess.CalledProcessError as e:
        return jsonify({"error": str(e)})
    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5003)

