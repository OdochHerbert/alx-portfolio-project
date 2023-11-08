import React, { useState, useEffect } from 'react';

const Usage = () => {
    const [networkData, setNetworkData] = useState({});
    const [outputText, setOutputText] = useState('');

    const fetchDataAndUpdateArrays = () => {
        fetch('http://127.0.0.1:5007/get_network_data')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the retrieved data

                // Set the output text
                setOutputText(data.output);

                // Parse the output text and extract relevant data
                const parsedData = parseOutputText(data.output);
                setNetworkData(parsedData);
            })
            .catch(error => console.error('Error:', error));
    };

    const parseOutputText = (output) => {
        const rows = output.split('\n');
        const data = {};
        for (let i = 0; i < rows.length; i++) {
            if (rows[i].trim().startsWith('Listening')) {
                data['Listening'] = rows[i].trim().replace('Listening on', '').trim();
            } else if (rows[i].trim().startsWith('Total send rate')) {
                data['Total send rate'] = rows[i].trim();
            } else if (rows[i].trim().startsWith('Total receive rate')) {
                data['Total receive rate'] = rows[i].trim();
            } else if (rows[i].trim().startsWith('Total send and receive rate')) {
                data['Total send and receive rate'] = rows[i].trim();
            }
            // Add more conditions to parse other relevant data as needed
        }
        return data;
    };

    useEffect(() => {
        // Fetch data immediately and update the arrays
        fetchDataAndUpdateArrays();

        // Fetch data and update the arrays every 13 seconds
        const interval = setInterval(() => {
            fetchDataAndUpdateArrays();
        }, 13000);

        return () => clearInterval(interval);
    }, []);

    const renderTable = (data) => {
        return (
            <table>
                <tbody>
                    {Object.entries(data).map(([key, value]) => (
                        <tr key={key}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div>
            <h1>Data retrieved from Flask backend:</h1>
            <div id="output"></div>
            {renderTable(networkData)}
        </div>
    );
};

export default Usage;
