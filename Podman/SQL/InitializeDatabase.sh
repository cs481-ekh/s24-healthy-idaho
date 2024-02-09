#!/bin/bash

mysql -u root --password="$MYSQL_ROOTPASSWORD" << EOF
USE ${MYSQUL_DATABASE};

EOF
