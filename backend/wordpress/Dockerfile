FROM wordpress:latest
COPY ./htaccess/.htaccess ./.htaccess
COPY ./custom-plugins/* ./wp-content/plugins/
RUN sudo chmod -R 755 /var/www/html
