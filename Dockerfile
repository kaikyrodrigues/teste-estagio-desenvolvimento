FROM php:8.2-apache

COPY frontend /var/www/html/frontend
COPY backend-php /var/www/html/backend-php

EXPOSE 80
