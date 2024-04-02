# CS481 Spring 2024 Capstone Project

## Project Name: Healthy Idaho Portal

- Project Sponsor: Moji Sadegh

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

Additionally, you must have the following python packages installed:

- mysql-connector-python
- python-decouple

If you are using Ubuntu or any other Linux Distribution that uses the apt package manager, you can use the ```./prereq.sh``` script to install the above dependencies onto your host (You will need sudo permissions to execute these). If you are using another host operating system such as Windows, you will need to ensure the above three are installed in your system.

To build the project, ensure you are at the root directory, then you can use the ```./build.sh``` script to build the docker image, alternatively you can use the the ```docker-compose build``` command to build the container in your terminal if you are unable to run the above shell script.

Lastly, before building the application, you must have a couple of environment files made, there needs to be one in the root directory of this project, as well as in the `/frontend` directory. These go as follows:

.env File in Root

```text
DB_HOST= #Host name of teh Database
MYSQL_DATABASE= #Name of the database
MYSQL_USER= #MySQL Username
MYSQL_PASSWORD= #Database Password (Keep this safe)
MYSQL_ROOT_USERNAME= #MySQL Root username
MYSQL_ROOT_PASSWORD= #Password for root user
MYSQL_PORT= #MySQL Port Number (Usually 3306)
DEBUG= #Debugging Flag for Django
SECRET_KEY= #Dajngo Secret Key (Keep this safe)
APP_ROOT= #Application root directory (Usually `s24-healthy-idaho`)
```

.env File in `/frontend`

```text
REACT_APP_API_ROOT=sdp.boisestate.edu/s24-healthy-idaho
PUBLIC_URL=s24-healthy-idaho
```

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

### Accessing the Application

You know the application is running correctly once you see this in your terminal:

```shell
/s24-healthy-idaho$ ./start.sh 
Starting the docker container...
Creating network "s24-healthy-idaho_hh-net" with driver "bridge"
Creating frontend-app ... done
Creating database-app ... done
Creating backend-app  ... done
Waiting for the database to start... 25
Populating the database...
Database populated successfully
Server is up and running!
```

Now the application can accessed at ```http://localhost:3000/s24-healthy-idaho```
