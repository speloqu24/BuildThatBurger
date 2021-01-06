CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (

    id int NOT NULL AUTO_INCREMENT,
    buger_names varchar(50),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);

