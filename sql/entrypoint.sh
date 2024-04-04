#!/bin/bash

/usr/local/bin/docker-entrypoint.sh mysqld >/dev/null 2>&1  &
PID="$!"

while ! mysqladmin ping -h"localhost" --silent; do
    echo "🟠 Wait for MySQL to be ready..."
    sleep 1
done

echo "🟢 MySQL is ready."
echo "🟦 Current user: $(whoami)"

# Do the thing
cd /docker-entrypoint-initdb.d
python3 UploadData.py

wait "$PID"