FROM python:3.10

WORKDIR /app/django

COPY . /app/django/
# COPY ../../backend /app/django/

RUN pip install -r requirements.txt
# RUN export PYTHONPATH=/usr/bin \
#     && pip install -r requirements.txt

COPY . . 

EXPOSE 8000


