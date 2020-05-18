#!/bin/sh
mkdir -p /var/www/html/wp-content/uploads && \
chown -R www-data:www-data /var/www && \
find /var/www/ -type d -exec chmod 0755 {} \; && \
find /var/www/ -type f -exec chmod 644 {} \;
echo "Permissions well set"
exec "apache2-foreground"
