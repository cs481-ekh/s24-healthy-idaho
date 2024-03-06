# CS481 Spring 2024 Capstone Project

## Project Name: Healthy Idaho Portal

- Project Sponsor:

## Team Members

- Braeden LaCombe - <braedenlacombe@u.boisestate.edu>
- Clara Arnold - <claraarnold@u.boisestate.edu>
- Anthony Diep - <anthonydiep@u.boisestate.edu>
- Joshua Corrales - <joshuacorrales930@u.boisestate.edu>

## Build Status

[![Build](https://github.com/cs481-ekh/s24-healthy-idaho/actions/workflows/build.yml/badge.svg)](https://github.com/cs481-ekh/s24-healthy-idaho/actions/workflows/build.yml)
[![Test](https://github.com/cs481-ekh/s24-healthy-idaho/actions/workflows/test.yml/badge.svg)](https://github.com/cs481-ekh/s24-healthy-idaho/actions/workflows/test.yml)

## Build Instructions

Before starting the application, you must have the following installed.

- python3
- docker
- docker-compose
- mysql-connector-python (installed through pip3)

If you are using Ubuntu or any other Linux Distribution that uses the apt package manager, you can use the ```./prereq.sh``` script to install the above dependencies onto your host (You will need sudo permissions to execute these). If you are using another host operating system such as Windows, you will need to ensure the above three are installed in your system.

To build the project, ensure you are at the root directory, then you can use the ```./build.sh``` script to build the docker image, alternatively you can use the the ```docker-compose build``` command to build the container in your terminal if you are unable to run the above shell script.

## Running the Application

### Using ```./start.sh``` Script

To start the services, you can use the ```./start.sh``` script which should take care of the rest. 

However, if you get the following error regarding the database or something similar:

```bash
mysql.connector.errors.OperationalError: 2013 (HY000): Lost connection to MySQL server at 'reading initial communication packet', system error: 0
```

This would mean python has failed to run the ```UploadData.py```, usually because python could not connect to the database. If this is the case, you can manually attempt to run this script by navigating to the ```sql/``` directory and running the UploadData script using the ```python3 UploadData.py``` command. If no errors are thrown, this would mean the data upload was successful.

### Manual Start

If you are unable to run the ```./start.sh``` script, you can use the ```docker-compose up``` command while in root to start all the services related to the app.

Alternatively, you can start the services individually if you wish, this can be useful if you need to make changes for the frontend for example but still need access to the backend. To do this, you can use the ```docker-compose up <service>``` command. You can also add the ```-d``` argument to detach the output and return back to bash after execution. There are 3 services to this application:

- frontend - React Frontend app
- backend - Django Webserver for managing backend api endpoints
- database - MySQL Database that holds the data for the app.

Note: Manually starting the application will start the services but data will not be populated in the database, because of this, you would need to manually run the ```UploadData.py``` script in the ```sql/``` directory as mentioned above using the ```python3 UploadData.py``` command.
