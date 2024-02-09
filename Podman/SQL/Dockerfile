FROM mysql/mysql/mysql-server:8.0

COPY ./docker/mysql/InitalizeDatabase.sh /docker-entrypoint-InitalizeDatabase.d/
RUN chmod -x /docker-entrypoint-InitalizeDatabase.sh
