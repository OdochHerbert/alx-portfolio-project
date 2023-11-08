from flask import Flask, jsonify, render_template
import subprocess
from flask_cors import CORS
import re
app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

# Function to execute shell commands
def run_command(command):
    result = subprocess.run(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, shell=True, text=True)
    if result.returncode == 0:
        return result.stdout.strip()
    else:
        return result.stderr

#Return macs, bytes in and bytes out of dvices connected in the network
@app.route('/network/users', methods=['GET'])
def get_network_users():
    command = "python macs_usage.py"
    macs_usage = run_command(command)
    return jsonify({'macs_usage': macs_usage})

# Example route to get network interfaces
@app.route('/network/interfaces', methods=['GET'])
def get_network_interfaces():
    command = "ip link show"
    network_interfaces = run_command(command)
    return jsonify({'network_interfaces': network_interfaces})

# Example route to get IP addresses
@app.route('/network/ip_addresses', methods=['GET'])
def get_ip_addresses():
    command = "ip addr show"
    ip_addresses = run_command(command)
    return jsonify({'ip_addresses': ip_addresses})

# Example route to get routing tables
@app.route('/network/routing_tables', methods=['GET'])
def get_routing_tables():
    command = "ip route show"
    routing_tables = run_command(command)
    return jsonify({'routing_tables': routing_tables})

# Example route to get network statistics
@app.route('/network/statistics', methods=['GET'])
def get_network_statistics():
    command = "netstat -s"
    network_statistics = run_command(command)
    return jsonify({'network_statistics': network_statistics})
#GEtting info from pyhton code
# Example route to get network interfaces
@app.route('/code', methods=['GET'])
def get_print():
    command = "python macs_usage.py"
    code = run_command(command)
    return jsonify(code)
@app.route('/linked_devices', methods=['GET'])
def get_band_monitor():
      command ='python macs_usage.py'
      bandwidth_usage =  run_command(command)
      bandwidth_usage_json = jsonify(bandwidth_usage)
      return bandwidth_usage_json
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
    app.run(debug=True, port=5007)  # Set the port to 5007
