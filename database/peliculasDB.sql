CREATE DATABASE movies_db;

USE movies_db;

CREATE TABLE movies(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(180),
description VARCHAR(255),
genre_id INT (15),
duration INT (200),
release_date TIMESTAMP,
censorship_level_id INT (15),
image VARCHAR(200)
);

DESCRIBE movies;