

CREATE TABLE person (
    id SERIAL,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    auth_token VARCHAR (30),
    device_id VARCHAR (20),
    PRIMARY KEY (username)
);

CREATE TABLE soil (
    event_ID SERIAL PRIMARY KEY,
    device_ID VARCHAR (80) NOT NULL,
    date VARCHAR (80) NOT NULL,
    moisture INT
);

CREATE TABLE water (
    event_ID SERIAL,
    username VARCHAR (80) NOT NULL,
    date VARCHAR (20),
    water_amount INT,
    PRIMARY KEY (event_ID)
);

CREATE TABLE device (
	id serial,
    device_ID VARCHAR (40),
    auth_token VARCHAR (30),
    username VARCHAR (80),
    notes VARCHAR (500),
    PRIMARY KEY (device_ID)
);

CREATE TABLE rain (
    event_ID SERIAL PRIMARY KEY,
    accumulation VARCHAR (20),
    precip_type VARCHAR (20),
    date VARCHAR (30),
    icon VARCHAR (20)
);
