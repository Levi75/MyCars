CREATE DATABASE garage;

CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email  VARCHAR(50),
    name  VARCHAR(50)
);

CREATE TABLE cars(
    cars_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price VARCHAR(50),
    user_id INTEGER REFERENCES users(user_id)
);