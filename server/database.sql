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



 
//добавление столбца user_id в таблицу cars
ALTER TABLE cars ADD COLUMN user_id SERIAL PRIMARY KEY; 


//удаление столбца user_id в таблице cars
ALTER TABLE cars DROP COLUMN user_id; 

//добавление столбца user_id в таблицу cars со связью с таблицей users столбцом user_id

ALTER TABLE cars ADD COLUMN user_id INTEGER REFERENCES users(user_id);