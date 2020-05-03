FROM wordpress:latest
COPY ./htaccess/.htaccess ./.htaccess
COPY ./custom-plugins/* ./wp-content/plugins/
RUN chmod -R 755 /var/www/html
