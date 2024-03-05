#!/bin/bash

echo "Cleaning up..."

echo "Stopping container.."
docker-compose down -v

echo "Removing containers..."
docker rmi -f $(docker images -aq)

exit 0