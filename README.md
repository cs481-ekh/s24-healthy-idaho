# CS481 Spring 2024 Capstone Project

## Project Name: Healthy Idaho Portal

- Project Sponsor: Moji Sadegh

## Team Members

- Clara Arnold - <claraarnold@u.boisestate.edu>
- Anthony Diep - <anthonydiep@u.boisestate.edu>
- Joshua Corrales - <joshuacorrales930@u.boisestate.edu>

## Build Status

[![Build](https://github.com/cs481-ekh/s24-healthy-idaho/actions/workflows/build.yml/badge.svg)](https://github.com/cs481-ekh/s24-healthy-idaho/actions/workflows/build.yml)
[![Test](https://github.com/cs481-ekh/s24-healthy-idaho/actions/workflows/test.yml/badge.svg)](https://github.com/cs481-ekh/s24-healthy-idaho/actions/workflows/test.yml)

## Build Instructions

Before starting the application, you must have the following installed.

- docker
- docker-compose

Additionally, you must have the following python packages installed if you would want to run some of the supplemental scripts:

- mysql-connector-python
- python-decouple

If you are using Ubuntu or any other Linux Distribution that uses the apt package manager, you can use the ```./prereq.sh``` script to install the above dependencies onto your host (You will need sudo permissions to execute these). If you are using another host operating system such as Windows, you will need to ensure the above three are installed in your system.

To build the project, ensure you are at the root directory, then you can use the ```./build.sh``` script to build the docker image, alternatively you can use the the ```docker-compose build``` command to build the container in your terminal if you are unable to run the above shell script and you can add the `-d` flag to detatch the output and return to your shell.

## Data Handling

All the raw data for this project can be found in .csv format in `/sql/scripts/data`. The data is imported automatically from the `FCensus_Combined.csv` file. If more data needs to be added, this file would need to be updated. Any new data must be in .csv format and must be placed in the `/sql/scripts/data` directory in `FCensus<Year>_modified.csv` format (i.e FCensus2021_modified.csv, FCensus2022_modified.csv and so on.)

To update the `FCensus_Combined.csv`, you must run the `CombineData.py` script assuming you have the new files formatted in the way mentioned previously. If python does not throw any errors, the process is successful.

## Running the Application

### Using ```./start.sh``` Script

To start the services, you can use the ```./start.sh``` script which should take care of the rest. 

### Manual Start

If you are unable to run the ```./start.sh``` script, you can use the ```docker-compose up``` command while in root to start all the services related to the app.

Alternatively, you can start the services individually if you wish, this can be useful if you need to make changes for the frontend for example but still need access to the backend. To do this, you can use the ```docker-compose up <service>``` command. You can also add the ```-d``` argument to detach the output and return back to bash after execution. There are 3 services to this application:

- frontend - React Frontend app
- backend - Django Webserver for managing backend api endpoints
- database - MySQL Database that holds the data for the app.

### Accessing the Application

You know the application is running correctly once you see this in your terminal:

```shell
name@HOST: ~/s24-healthy-idaho$ ./start.sh 
Starting the docker container...
Creating network "s24-healthy-idaho_hh-net" with driver "bridge"
Creating database-app ... done
Creating frontend-app ... done
Creating backend-app  ... done
Server is up and running!
```
Now the following services can be accessed at the following.

- Frontend: ```http://localhost:{REACT_PORT}/s24-healthy-idaho```
- Backend API: ```http://localhost:{DJANGO_PORT}/s24-healthy-idaho/api/```
- Database: ```localhost:{MYSQL_PORT}``` either through MYSQL Workbench or CLI