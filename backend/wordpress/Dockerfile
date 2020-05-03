FROM wordpress:latest
COPY ./htaccess/.htaccess ./.htaccess
COPY ./custom-plugins/* ./wp-content/plugins/
RUN chown -R www-data:www-data /var/www
RUN find /var/www/ -type d -exec chmod 0755 {} \;
RUN find /var/www/ -type f -exec chmod 644 {} \;
