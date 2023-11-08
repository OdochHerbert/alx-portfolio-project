import React, { useState, useEffect } from 'react';

const LinkedDevices = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5007/linked_devices');
        const jsonData = await response.json();
        console.log('Fetched Data:', jsonData); // Log the fetched data

        // Convert the data to an array
        const dataArray = jsonData.split(',')

        console.log('Converted Data Array:', dataArray); // Log the converted data array
        setData(dataArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Display</h2>
      <p>{data}</p>
      <table>
        <thead>
          <tr>
            <th>MAC Address</th>
            <th>Total Bytes In</th>
            <th>Total Bytes Out</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) &&
            data.map((item, index) => (
              <tr key={index}>
                <td>{item['MAC Address']}</td>
                <td>{item['Total Bytes In']}</td>
                <td>{item['Total Bytes Out']}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default LinkedDevices;
