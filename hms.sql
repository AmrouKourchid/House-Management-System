CREATE TABLE worker (
	id		 int,
	address	 varchar(50),
	name	 varchar(50),
	phone	 int,
	availablity smallint,
	PRIMARY KEY(id)
);

CREATE TABLE category (
	id	 int,
	name varchar(50),
	PRIMARY KEY(id)
);

CREATE TABLE assignment (
	id	 int,
	status	 smallint,
	fee	 int,
	ass_date	 date,
	request_id int NOT NULL,
	worker_id	 int NOT NULL,
	payment_id int NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE payment (
	id		 int,
	dpc		 date,
	dpw		 date,
	pay_worker	 int,
	pay_customer int,
	PRIMARY KEY(id)
);

CREATE TABLE customer (
	id		 int,
	name	 varchar(50),
	phone	 int,
	address	 varchar(50),
	credit_card int,
	PRIMARY KEY(id)
);

CREATE TABLE request (
	id		 int,
	status	 smallint,
	description varchar(50),
	req_date	 date,
	worker_id	 int NOT NULL,
	customer_id int NOT NULL,
	PRIMARY KEY(id)
);

CREATE TABLE category_worker (
	category_id int,
	worker_id	 int,
	PRIMARY KEY(category_id,worker_id)
);

ALTER TABLE assignment ADD CONSTRAINT assignment_fk1 FOREIGN KEY (request_id) REFERENCES request(id);
ALTER TABLE assignment ADD CONSTRAINT assignment_fk2 FOREIGN KEY (worker_id) REFERENCES worker(id);
ALTER TABLE assignment ADD CONSTRAINT assignment_fk3 FOREIGN KEY (payment_id) REFERENCES payment(id);
ALTER TABLE request ADD CONSTRAINT request_fk1 FOREIGN KEY (worker_id) REFERENCES worker(id);
ALTER TABLE request ADD CONSTRAINT request_fk2 FOREIGN KEY (customer_id) REFERENCES customer(id);
ALTER TABLE category_worker ADD CONSTRAINT category_worker_fk1 FOREIGN KEY (category_id) REFERENCES category(id);
ALTER TABLE category_worker ADD CONSTRAINT category_worker_fk2 FOREIGN KEY (worker_id) REFERENCES worker(id);

INSERT INTO worker (id, address, name, phone, availablity)
VALUES
(1, '123 Main St', 'John Smith', 12345678, 1),
(2, '456 Oak St', 'Jane Doe', 98765432, 1),
(3, '789 Maple Ave', 'Bob Johnson', 55512345, 0),
(4, '321 Elm St', 'Samantha Lee', 77755512, 1);

INSERT INTO category (id, name)
VALUES
(1, 'Plumbing'),
(2, 'Electrical'),
(3, 'Carpentry'),
(4, 'Painting');

INSERT INTO category_worker (category_id, worker_id)
VALUES
(1, 1),
(1, 3),
(2, 2),
(3, 3),
(4, 4);

INSERT INTO customer (id, name, phone, address, credit_card)
VALUES
(1, 'Mary Johnson', 55512345, '456 Elm St', 123456789),
(2, 'Tom Smith', 55598765, '123 Maple Ave', 234567890);

INSERT INTO request (id, status, description, req_date, worker_id, customer_id)
VALUES
(1, 1, 'Leaky faucet', '2022-01-01', 1, 1),
(2, 2, 'Circuit breaker tripped', '2022-02-15', 2, 2),
(3, 1, 'Drywall repair', '2022-03-22', 3, 1),
(4, 1, 'Exterior painting', '2022-04-10', 4, 2);

INSERT INTO payment (id, dpc, dpw, pay_worker, pay_customer)
VALUES
(1, '2022-01-15', '2022-01-20', 100, 150),
(2, '2022-02-18', '2022-02-22', 125, 100),
(3, '2022-03-25', '2022-03-30', 200, 175);

INSERT INTO assignment (id, status, fee, ass_date, request_id, worker_id, payment_id) VALUES
(1, 1, 100, '2023-03-01', 1, 1, 1),
(2, 2, 50, '2023-03-02', 2, 2, 2),
(3, 1, 75, '2023-03-03', 3, 1, 3);




-- query to select information about a worker when choosing a specific category

select id, address, name, phone, availablity
from worker,category_worker
where worker.id = category_worker.worker_id
and category_worker.category_id = 1;
