#!/bin/bash
STAGING_STORAGE_FOLDER=/staging
PROD_STORAGE_FOLDER=/prod

echo "Replacing prod storage with staging storage"
rm -rfv ${PROD_STORAGE_FOLDER}/* && cp -rv ${STAGING_STORAGE_FOLDER}/* ${PROD_STORAGE_FOLDER}/*
echo "Showing running docker containers"
docker ps
echo "Connecting to mariadb and run the migration"
docker exec -ti $(docker ps -aqf "name=mariadb:latest") bash -c 'mysqldump  -u root -p${MYSQL_ROOT_PASSWORD} --opt directus-staging | mysql -u root -p${MYSQL_ROOT_PASSWORD} -C directus-prod'
/app/scripts/build-ssg-prod.sh
echo "Process finished"