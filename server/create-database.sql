CREATE DATABASE hba;
USE hba;

CREATE TABLE food_nutrients (
    food_id INTEGER NOT NULL,
    food_name VARCHAR(55) NOT NULL,
    carbs INTEGER NOT NULL,
    CONSTRAINT PK_food_nutrients PRIMARY KEY (food_id)
);


INSERT INTO food_nutrients
(food_id, food_name, carbs)
VALUES
(1, 'Sandwich', 33),
(2, 'Apple', 15),
(3, 'Orange', 10),
(4, 'Sausage Roll', 16),
(5, 'Chicken Kiev', 16),
(6, 'Glucogel', 10),
(7, 'Pork Pie', 35),
(8, 'Fruit Corner', 18),
(9, 'Macaroni Cheese', 54),
(10, 'Chips', 30);
