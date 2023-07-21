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

CREATE TABLE Category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE Review (
    id SERIAL PRIMARY KEY,
    rating NUMERIC,
    comment VARCHAR(255)
);

 CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    age INT,
    membership_id INT
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

 ALTER TABLE Product 
    ADD CONSTRAINT fk_review_id FOREIGN KEY (review_id) REFERENCES Review(id),
    ADD CONSTRAINT fk_category_id FOREIGN KEY (category_id) REFERENCES Category(id),
    ADD CONSTRAINT fk_color_id FOREIGN KEY (color_id) REFERENCES Color(id),
    ADD CONSTRAINT fk_store_id FOREIGN KEY (store_id) REFERENCES Store(id);

ALTER TABLE Users
    ADD CONSTRAINT fk_membership_id FOREIGN KEY (membership_id) REFERENCES Membership(id);