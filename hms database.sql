create database hms;
use hms;


CREATE TABLE worker (
	id		 INTEGER,
	address	 VARCHAR(50),
	name	 VARCHAR(50),
	phone	 VARCHAR(50),
	availablity SMALLINT,
	PRIMARY KEY(id)
);

CREATE TABLE category (
	id	 INTEGER,
	name	 VARCHAR(50),
	worker_id INTEGER NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE assignment (
	id	 INTEGER,
	status	 SMALLINT,
	fee	 INTEGER,
	ass_date	 DATE,
	request_id INTEGER NOT NULL,
	worker_id	 INTEGER NOT NULL,
	payment_id INTEGER NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE payment (
	id		 INTEGER,
	dpc		 DATE,
	dpw		 DATE,
	pay_worker	 INTEGER,
	pay_customer INTEGER,
	PRIMARY KEY(id)
);

CREATE TABLE customer (
	id		 INTEGER,
	name	 VARCHAR(50),
	phone	 INTEGER,
	address	 VARCHAR(50),
	credit_card INTEGER,
	PRIMARY KEY(id)
);

CREATE TABLE request (
	id		 INTEGER,
	status	 SMALLINT,
	description VARCHAR(50),
	req_date	 DATE,
	worker_id	 INTEGER NOT NULL,
	customer_id INTEGER NOT NULL,
	PRIMARY KEY(id)
);

ALTER TABLE category ADD CONSTRAINT category_fk1 FOREIGN KEY (worker_id) REFERENCES worker(id);
ALTER TABLE assignment ADD CONSTRAINT assignment_fk1 FOREIGN KEY (request_id) REFERENCES request(id);
ALTER TABLE assignment ADD CONSTRAINT assignment_fk2 FOREIGN KEY (worker_id) REFERENCES worker(id);
ALTER TABLE assignment ADD CONSTRAINT assignment_fk3 FOREIGN KEY (payment_id) REFERENCES payment(id);
ALTER TABLE request ADD CONSTRAINT request_fk1 FOREIGN KEY (worker_id) REFERENCES worker(id);
ALTER TABLE request ADD CONSTRAINT request_fk2 FOREIGN KEY (customer_id) REFERENCES customer(id);




