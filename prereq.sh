#!/bin/bash
sudo apt-get update
sudo apt install podman -y
sudo apt install python3-pip -y
sudo pip3 install https://github.com/containers/podman-compose/archive/devel.tar.gz
