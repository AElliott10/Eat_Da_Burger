CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id int not null	auto_increment,
burger_name varchar(255) not null,
devoured bool default false,
primary key (id)
);