FROM wordpress:latest
COPY ./htaccess/.htaccess ./.htaccess
COPY ./custom-plugins/* ./wp-content/plugins/
CMD ["apache2-custom.sh"]