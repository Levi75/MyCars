CREATE DATABASE garage;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email  VARCHAR(50),
    name  VARCHAR(50)
);

CREATE TABLE cars(
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    price VARCHAR(50),
    year DATE,
    brand VARCHAR(50),
    model VARCHAR(50),
    boxType VARCHAR(50),
    engineCapacity VARCHAR(50)
);

CREATE TABLE garage(
    id SERIAL PRIMARY KEY,
    car_id INTEGER REFERENCES cars(id),
    user_id INTEGER REFERENCES users(id)
);


// удаление таблицы cars
DROP TABLE cars;
 
//добавление столбца user_id в таблицу cars
ALTER TABLE cars ADD COLUMN user_id SERIAL PRIMARY KEY; 


//удаление столбца user_id в таблице cars
ALTER TABLE cars DROP COLUMN user_id; 

//добавление столбца user_id в таблицу cars со связью с таблицей users столбцом user_id

ALTER TABLE cars ADD COLUMN user_id INTEGER REFERENCES users(user_id);



SELECT p.id, p.name `Имя сотрудника`, ps.id `pos.id`, ps.name `Должность`
FROM `persons` p
INNER JOIN `positions` ps ON ps.id = p.post_id