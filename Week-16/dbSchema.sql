-- Schema & Records

CREATE DATABASE pesto;

CREATE TABLE STATES (
	sid INT PRIMARY KEY,
	state CHAR(20)
);

CREATE TABLE CITIES (
	cid INT PRIMARY KEY AUTO_INCREMENT,
	city CHAR(20),
	state_id INT,
	FOREIGN KEY (state_id) REFERENCES state(sid)
);

CREATE TABLE WAREHOUSES (
	wid INT PRIMARY KEY AUTO_INCREMENT,
	wname CHAR(20),
	extras JSON,
	city_id INT,
	FOREIGN KEY (city_id) REFERENCES cities(cid)
);


CREATE TABLE STORES (
	sid INT PRIMARY KEY AUTO_INCREMENT,
	sname CHAR(20),
	warehouse_id INT,
	FOREIGN KEY (warehouse_id) REFERENCES warehouses(wid)
);


CREATE TABLE CUSTOMERS (
	cuid INT PRIMARY KEY AUTO_INCREMENT,
	cname VARCHAR(50),
	address VARCHAR(50),
	city_id INT,
	FOREIGN KEY (city_id) REFERENCES cities(cid)
);


CREATE TABLE ITEMS (
	iid INT PRIMARY KEY AUTO_INCREMENT,
	idescription TEXT,
	weight DECIMAL(5,2),
	cost DECIMAL(5,2),
	store_id INT,
	FOREIGN KEY (store_id) REFERENCES stores(sid)
);

CREATE TABLE ORDERS (
	oid INT PRIMARY KEY AUTO_INCREMENT,
	order_date DATE,
	customer_id INT,
	FOREIGN KEY (customer_id) REFERENCES customers(cuid)
);

CREATE TABLE ORDEREDITEMS (
	ono INT PRIMARY KEY AUTO_INCREMENT,
	order_id INT,
	item_id INT,
	quantity INT,
	FOREIGN KEY (order_id) REFERENCES orders(oid),
	FOREIGN KEY (item_id) REFERENCES items(iid)	
);

INSERT INTO STATES (sid, state) VALUES (1,'Gujarat');
INSERT INTO STATES (sid, state) VALUES (2,'Maharashtra');
INSERT INTO STATES (sid, state) VALUES (3,'Rajasthan');

INSERT INTO CITIES (city, state_id) VALUES ('Pune',2);
INSERT INTO CITIES (city, state_id) VALUES ('Ahmedabad',1);
INSERT INTO CITIES (city, state_id) VALUES ('Nagpur',2);
INSERT INTO CITIES (city, state_id) VALUES ('Mumbai',2);
INSERT INTO CITIES (city, state_id) VALUES ('Gandhinagar',1);
INSERT INTO CITIES (city, state_id) VALUES ('Jaipur',3);

INSERT INTO WAREHOUSES (wname, extras, city_id) VALUES ('WHONE','{"key":"description"}',1);
INSERT INTO WAREHOUSES (wname, extras, city_id) VALUES ('WH002','{"key":"description"}',2);
INSERT INTO WAREHOUSES (wname, extras, city_id) VALUES ('WH003','{"key":"description"}',2);
INSERT INTO WAREHOUSES (wname, extras, city_id) VALUES ('WH004','{"key":"description"}',4);
INSERT INTO WAREHOUSES (wname, extras, city_id) VALUES ('WH005','{"key":"description"}',5);

INSERT INTO STORES (sname, warehouse_id) VALUES ('ST01',1);
INSERT INTO STORES (sname, warehouse_id) VALUES ('ST02',1);
INSERT INTO STORES (sname, warehouse_id) VALUES ('ST03',2);
INSERT INTO STORES (sname, warehouse_id) VALUES ('ST04',3);
INSERT INTO STORES (sname, warehouse_id) VALUES ('ST05',5);

INSERT INTO CUSTOMERS (cname, address, city_id) VALUES ('Lakhan','Dash Society', 1);
INSERT INTO CUSTOMERS (cname, address, city_id) VALUES ('Maghan','Lash Society', 5);
INSERT INTO CUSTOMERS (cname, address, city_id) VALUES ('Mr. Patil','Meta Society', 4);
INSERT INTO CUSTOMERS (cname, address, city_id) VALUES ('Samar','Lame Park', 4);

INSERT INTO ITEMS (idescription, weight, cost, store_id) VALUES ('Toothbrush',10,20,1);
INSERT INTO ITEMS (idescription, weight, cost, store_id) VALUES ('Notebook',100,40,1);
INSERT INTO ITEMS (idescription, weight, cost, store_id) VALUES ('Matchboxes',400,500,2);
INSERT INTO ITEMS (idescription, weight, cost, store_id) VALUES ('Pencils',40,10,2);
INSERT INTO ITEMS (idescription, weight, cost, store_id) VALUES ('Stick Pens',100,100,3);
INSERT INTO ITEMS (idescription, weight, cost, store_id) VALUES ('Scale',120,80,4);
INSERT INTO ITEMS (idescription, weight, cost, store_id) VALUES ('Toothpaste',60,70,5);

INSERT INTO ORDERS (order_date, customer_id) VALUES ('2023-2-20',1);
INSERT INTO ORDERS (order_date, customer_id) VALUES ('2023-02-26',2);
INSERT INTO ORDERS (order_date, customer_id) VALUES ('2023-02-27',2);
INSERT INTO ORDERS (order_date, customer_id) VALUES ('2023-02-28',4);
INSERT INTO ORDERS (order_date, customer_id) VALUES ('2023-03-01',1);
INSERT INTO ORDERS (order_date, customer_id) VALUES ('2023-03-01',3);

INSERT INTO ORDEREDITEMS (order_id, item_id, quantity) VALUES (1,1,2);
INSERT INTO ORDEREDITEMS (order_id, item_id, quantity) VALUES (1,7,1);
INSERT INTO ORDEREDITEMS (order_id, item_id, quantity) VALUES (2,4,1);
INSERT INTO ORDEREDITEMS (order_id, item_id, quantity) VALUES (3,2,1);
INSERT INTO ORDEREDITEMS (order_id, item_id, quantity) VALUES (3,6,1);
INSERT INTO ORDEREDITEMS (order_id, item_id, quantity) VALUES (4,3,5);
INSERT INTO ORDEREDITEMS (order_id, item_id, quantity) VALUES (4,7,2);
INSERT INTO ORDEREDITEMS (order_id, item_id, quantity) VALUES (5,4,2);
INSERT INTO ORDEREDITEMS (order_id, item_id, quantity) VALUES (5,5,1);
INSERT INTO ORDEREDITEMS (order_id, item_id, quantity) VALUES (5,6,2);

