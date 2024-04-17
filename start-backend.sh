#!/bin/bash

# This script only starts the backend services and populates the database with the data from the csv files
# Only realy useful for frontend development but you need to the backendstuff.
# Just run this and do npm start in the frontend folder and you should be good to go

echo "Starting backend containers..."
docker-compose up -d database
docker-compose up -d backend

# sleep_time=25
# for i in $(seq "$sleep_time"); do
#     echo -ne "Waiting for the database to start... $i\r"
#     sleep 1
# done
# echo -ne "\n"

# echo "Populating the database..."
# cd sql/
# python3 UploadData.py

# if [ $? -ne 0 ]; then
#     echo "Failed to populate the database"
#     exit 1
# fi
# echo "Database populated successfully"

echo "Backend services up and running!"
exit 0