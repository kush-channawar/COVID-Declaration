CREATE DATABASE covid;

CREATE TABLE users(
  user_id serial,
  user_name VARCHAR(255) NOT NULL,
  user_age INTEGER NOT NULL ,
  user_address VARCHAR(255) NOT NULL,
  user_sex VARCHAR(10) NOT NULL,
  FCSSF VARCHAR(5) NOT NULL,
  BREATHING VARCHAR(5) NOT NULL,
  ABROAD VARCHAR(5) NOT NULL,
  DOMESTIC VARCHAR(5) NOT NULL,
  EXPOSURE VARCHAR(5) NOT NULL,
  HEALTHCARE VARCHAR(5) NOT NULL,
  PRIMARY KEY(user_id)
);
