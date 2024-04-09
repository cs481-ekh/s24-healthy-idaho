#!/bin/bash

echo "Starting the docker container..."
docker-compose up -d

# wait for the database to start
# rudamentary way of doing this, but it works, but probs need a better solution
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

echo "Server is up and running!"
exit 0