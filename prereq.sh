#!/bin/bash
sudo apt-get update
sudo apt install podman -y
sudo apt install python3-pip -y
pip3 install podman-compose
sudo curl -o /usr/local/bin/podman-compose https://raw.githubusercontent.com/containers/podman-compose/devel/podman_compose.py
sudo chmod +x /usr/local/bin/podman-compose