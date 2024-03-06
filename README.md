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

To start the services, you can use the ```./start``` script which should take care of the rest.

However, if you get the following error regarding the database or something similar:

```bash
mysql.connector.errors.OperationalError: 2013 (HY000): Lost connection to MySQL server at 'reading initial communication packet', system error: 0
```

This would mean python has failed to run the ```UploadData.py```, usually because python could not connect to the database. If this is the case, you can manually attempt to run this script by navigating to the ```sql/``` directory and running the UploadData script using the ```python3 UploadData.py``` command. If no errors are thrown, this would mean the data upload was successful.