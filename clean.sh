#!/bin/bash
echo "Cleaning up..."
echo "Stopping container.."
podman-compose down -v

echo "Removing containers..."
podman rmi -a -f

echo "Killing processes on ports..."
fuser -n tcp -k 3000
fuser -n tcp -k 8000 

exit 0