-- CREATE DATABASE perncars;

-- CREATE TABLE carses(
--     cars_id SERIAL PRIMARY KEY,
--     name VARCHAR(255),
--     price VARCHAR(255),
-- );

CREATE DATABASE garage;
CREATE TABLE users(
    user_id SERIAL PRIMARY KEY,
    email  VARCHAR(50),
    name  VARCHAR(50)
);
CREATE TABLE cars(
    cars_id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price VARCHAR(50)
);