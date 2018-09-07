CREATE DATABASE blackcreek;

\c blackcreek;

CREATE EXTENSION "uuid-ossp";


CREATE TABLE HOMES(
    id uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
    latitude DECIMAL(10,6) NOT NULL,
    longitude DECIMAL(10,6) NOT NULL,
    name VARCHAR(200),
    address VARCHAR(400) 
);
