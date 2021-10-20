DROP DATABASE IF EXISTS movies_db;
CREATE DATABASE movies_db;
USE movies_db;
CREATE TABLE users (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  name varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  email varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  password varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  admin BIT NOT NULL,
  remember_token varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY users_email_unique (email)
);
CREATE TABLE genres (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  name varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  ranking int(10) unsigned NOT NULL,
  active tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (id),
  UNIQUE KEY genres_ranking_unique (ranking)
);
CREATE TABLE movies (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  title varchar(500) COLLATE utf8_unicode_ci NOT NULL,
  rating decimal(3,1) unsigned NOT NULL,
  awards int(10) unsigned NOT NULL DEFAULT 0,
  release_date datetime NOT NULL,
  length int(10) unsigned DEFAULT NULL,
  genre_id int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (id),
  KEY movies_genre_id_foreign (genre_id),
  CONSTRAINT movies_genre_id_foreign FOREIGN KEY (genre_id) REFERENCES genres (id)
);
CREATE TABLE actors (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  first_name varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  last_name varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  rating decimal(3,1) DEFAULT NULL,
  favorite_movie_id int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (id),
  KEY actors_favorite_movie_id_foreign (favorite_movie_id),
  CONSTRAINT actors_favorite_movie_id_foreign FOREIGN KEY (favorite_movie_id) REFERENCES movies (id)
);
CREATE TABLE actor_movie (
  id int(10) unsigned NOT NULL AUTO_INCREMENT,
  created_at timestamp NULL DEFAULT NULL,
  updated_at timestamp NULL DEFAULT NULL,
  actor_id int(10) unsigned NOT NULL,
  movie_id int(10) unsigned NOT NULL,
  PRIMARY KEY (id),
  KEY actor_movie_actor_id_foreign (actor_id),
  KEY actor_movie_movie_id_foreign (movie_id),
  CONSTRAINT actor_movie_actor_id_foreign FOREIGN KEY (actor_id) REFERENCES actors (id),
  CONSTRAINT actor_movie_movie_id_foreign FOREIGN KEY (movie_id) REFERENCES movies (id)
);


