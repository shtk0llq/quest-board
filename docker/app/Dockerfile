FROM php:8.3.6-fpm

RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    && docker-php-ext-install pdo_mysql

COPY ./php.ini /usr/local/etc/php/php.ini
COPY --from=composer/composer:latest-bin /composer /usr/bin/composer
WORKDIR /app
