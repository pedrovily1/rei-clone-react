
CREATE TABLE User (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INT
);

CREATE TABLE Product (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(255),
    price NUMERIC,
    discount NUMERIC,
    sale_end_date TIMESTAMP,
    quantity NUMERIC,
    review_id INT,
    category_id INT,
    color_id INT,
    store_id INT
);

CREATE TABLE Color (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE Store (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255)
);

CREATE TABLE Membership (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255),
    fee NUMERIC
);

CREATE TABLE Review (
    id SERIAL PRIMARY KEY,
    rating NUMERIC,
    comment VARCHAR(255)
);

CREATE TABLE Category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

 
ALTER TABLE Product 
    ADD FOREIGN KEY (review_id) REFERENCES Review(id),
    ADD FOREIGN KEY (category_id) REFERENCES Category(id),
    ADD FOREIGN KEY (color_id) REFERENCES Color(id),
    ADD FOREIGN KEY (store_id) REFERENCES Store(id);

ALTER TABLE User
    ADD FOREIGN KEY (id) REFERENCES Membership(id);
