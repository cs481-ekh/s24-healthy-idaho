#!/bin/bash
echo "Cleaning up..."

echo "Stopping container.."
docker-compose down -v

echo "Removing containers..."
docker rmi -f $(docker images -aq)

echo "Killing processes on ports..."
fuser -n tcp -k 3000
fuser -n tcp -k 8000 

exit 0