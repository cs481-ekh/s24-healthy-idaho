#!/bin/bash

CSV_PATH="/docker-entrypoint-initdb.d/data"

for file in $CSV_PATH/*.csv; do
    echo "Importing $file"
    mysql -u "${MYSQL_ROOT_USER}" -p"${MYSQL_ROOT_PASSWORD}" "${MYSQL_DATABASE}" <<EOF
    LOAD DATA INFILE "$file" 
    INTO TABLE ${MYSQL_TABLE}
    FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    IGNORE 1 ROWS;
EOF
    echo "Imported $file"
done
