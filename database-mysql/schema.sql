CREATE DATABASE IF NOT EXISTS inventory;
USE inventory;

CREATE TABLE products (
  productId INT,
  type VARCHAR(50),
  name VARCHAR(100),
  price INT,
  description TEXT
);



-- mysql -u root < schema.sql