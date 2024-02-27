FROM python:3.13.0a4-bookworm

RUN apt-get update && apt-get install -y \
    python3-pip

RUN pip3 install mysql-connector-python
RUN mkdir /python-scripts
COPY . /python-scripts
WORKDIR /python-scripts
RUN ls -la

CMD ["./wait.sh", "database:3306", "--timeout=30", "--", "python3", "UploadData.py"]
