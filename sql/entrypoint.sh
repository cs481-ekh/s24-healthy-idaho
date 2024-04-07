#!/bin/bash

/usr/local/bin/docker-entrypoint.sh mysqld >/dev/null 2>&1 &
PID="$!"

while ! mysqladmin ping -h"localhost" --silent; do
    echo "🟠 Wait for MySQL to be ready..."
    sleep 1
done

echo "🟢 MySQL is ready."
echo "🟦 Current user: $(whoami)"

cd /docker-entrypoint-initdb.d
python3 UploadData.py

if [ $? -ne 0 ]; then
    echo "🔴 Data upload failed."
    exit 1
fi

echo "🟢 Data uploaded."
echo "🟢 Database service up and running!"

wait "$PID"