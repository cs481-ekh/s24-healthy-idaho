FROM mysql:8.3.0

RUN python3 -m pip install mysql-connector-python
RUN python3 -m pip install python-decouple

COPY entrypoint.sh /docker-entrypoint-initdb.d/
RUN chmod +x /docker-entrypoint-initdb.d/entrypoint.sh

ENTRYPOINT [ "/docker-entrypoint-initdb.d/entrypoint.sh" ]