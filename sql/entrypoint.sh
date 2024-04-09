#!/bin/bash

# Check if MySQL is already running
if ! mysqladmin ping -h"localhost" --silent; then
    /usr/local/bin/docker-entrypoint.sh mysqld >/dev/null 2>&1 &
    PID="$!"

    while ! mysqladmin ping -h"localhost" --silent; do
        echo "🟠 Wait for MySQL to be ready..."
        sleep 1
    done
else
    echo "🟢 MySQL is already running."
    PID=$(pgrep mysqld)
fi

echo "🟢 MySQL is ready."
echo "🟦 Current user: $(whoami)"

cd /docker-entrypoint-initdb.d
python3 UploadData.py

if [ $? -ne 0 ]; then
    echo "🔴 Data upload failed."

else
    echo "🟢 Data uploaded."
    echo "🟢 Database service up and running!"
fi

wait "$PID"