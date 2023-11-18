# HYSU(Server Monitoring)

This is a sample Flask-React application that provides network-related information through a RESTful API. The application is hosted on [Render](https://render.com/) and uses [Auth0](https://auth0.com/) for authentication, [Gunicorn](https://gunicorn.org/) as the WSGI server, and [Nginx](https://nginx.org/) as a reverse proxy.

## Overview

The application consists of a Flask backend that serves a RESTful API and a React front-end that interacts with the API. The API endpoints provide information about network interfaces, IP addresses, routing tables, and network statistics. Additionally, there are endpoints for executing shell commands and retrieving real-time network data.


## Technologies Used

- [Flask](https://flask.palletsprojects.com/): Python web framework for the backend.
- [React](https://reactjs.org/): JavaScript library for the front-end.
- [Auth0](https://auth0.com/): Authentication and authorization platform.
- [Gunicorn](https://gunicorn.org/): WSGI server for running the Flask app.
- [Nginx](https://nginx.org/): Reverse proxy server.


## Prerequisites
Before running the application, ensure you have the following:
- Python (version x.x.x)
- Node.js and npm (for React development)
- Auth0 account for authentication configuration
- Render account for hosting the application
- Gunicorn installed (`pip install gunicorn`)
- Nginx server


## Installation


  **Clone the repository:**
   git clone https://github.com/OdochHerbert/alx-portfolio-project.git
   cd alx-portfolio-project.git/HYSU-backend
   Install Python dependencies for flask app. <0-server_api.app>
   cd frontend alx-portfolio-project.git/HYSU-frontend
   npm install

   
**Configure Auth0:**

    Create an Auth0 application and configure the callback URLs.
    Update the Auth0 configuration in the config.py file.

    
**Configure nginx server**


    Configure nginx server as proxy pass for all flask endpoints
    
**Run the application:**

     cd alx-portfolio-project.git/HYSU-backend
     gunicorn -d --bind 0.0.0.0:5007 0-server_api:app
     cd frontend alx-portfolio-project.git/HYSU-frontend
     npm start
    Open your browser and navigate to http://localhost:5000 to access the application.

    
**API Endpoints****

    /network/users: Get information about devices connected to the network.
    /network/interfaces: Get information about network interfaces.
    /network/ip_addresses: Get information about IP addresses.
    /network/routing_tables: Get information about routing tables.
    /network/statistics: Get network statistics.
    /code: Execute a Python script and return the output.
    /linked_devices: Execute a Python script and return the output as JSON.
    /get_network_data: Get real-time network data.

    
**Contributing**

If you'd like to contribute to this project, please follow the guidelines in CONTRIBUTING.md.


**License**

This project is open source.


**Authors**

Odoch Herbert
Mohammed Al Berkani

