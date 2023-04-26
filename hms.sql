CREATE DATABASE hms;
USE hms;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL
);

CREATE TABLE workers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  category VARCHAR(255) NOT NULL,
  cellPhone VARCHAR(255) NOT NULL,
  addressUser VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users (email, password) VALUES 
('john@example.com', 'password123'),
('jane@example.com', 'password456'),
('a', 'a');

INSERT INTO workers (name, category, cellPhone, addressUser) VALUES 
('John Doe', 'Plumber', '555-1234', '123 Main St'),
('Jane Smith', 'Electrician', '555-5678', '456 Elm St'),
('Bob Johnson', 'Carpenter', '555-9012', '789 Oak St'),
('Samuel Lee', 'Gardener', '555-3456', '234 Cherry St'),
('Sara Lee', 'Chef', '555-7890', '567 Pine St'),
('Alex Brown', 'Handyman', '555-2345', '890 Maple St'),
('Chris Davis', 'Plumber', '555-6789', '123 Oak St'),
('Olivia Martinez', 'Electrician', '555-0123', '456 Main St'),
('Emily Wilson', 'Carpenter', '555-4567', '789 Elm St'),
('David Rodriguez', 'Gardener', '555-8901', '234 Oak St');