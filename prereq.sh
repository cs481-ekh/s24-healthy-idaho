#!/bin/bash

# apt packages
sudo apt-get update
sudo apt install docker -y
sudo apt install docker-compose -y
sudo apt install python3-pip -y

# python packages
pip3 install mysql-connector-python
pip3 install python-decouple