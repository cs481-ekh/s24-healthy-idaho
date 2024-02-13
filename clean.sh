#!/bin/bash
podman-compose down -v
fuser -n tcp -k 3000
fuser -n tcp -k 8000 
exit 127
