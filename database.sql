CREATE TABLE person (
    id SERIAL PRIMARY KEY,
    username VARCHAR (80) UNIQUE NOT NULL,
    password VARCHAR (1000) NOT NULL,
    auth_token VARCHAR (30),
    device_id VARCHAR (20),
    zipcode INT REFERENCES zipcode(zipcode)
);

CREATE TABLE soil (
    event_ID SERIAL PRIMARY KEY,
    device_ID VARCHAR (80) UNIQUE NOT NULL,
    date VARCHAR (80) NOT NULL,
    moisture INT NOT NULL
);

CREATE TABLE water (
	event_ID SERIAL NOT NULL,
	user_ID INT NOT NULL,
	date VARCHAR (20) NOT NULL,
	water_amount INT NOT NULL,
	unit VARCHAR (5) NOT NULL,
	PRIMARY KEY (event_ID),
	FOREIGN KEY (user_ID) REFERENCES person(id)
);

CREATE TABLE zipcode (
	zipcode INT NOT NULL	
);

CREATE TABLE device (
	device_ID VARCHAR (20),
	auth_token VARCHAR (30) REFERENCES person(auth_token),
	user_ID INT REFERENCES person(id)
);

CREATE TABLE rain (
	event_ID SERIAL PRIMARY KEY,
	zipcode INT REFERENCES zipcode(zipcode),
	accumulation VARCHAR (20),
	precip VARCHAR (20),
	icon VARCHAR (20)
);