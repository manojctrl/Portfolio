-- Create Portfolio Database
CREATE DATABASE IF NOT EXISTS portfolio_db;

USE portfolio_db;

-- Create Projects Table
CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description LONGTEXT NOT NULL,
  image VARCHAR(500),
  link VARCHAR(500),
  technologies VARCHAR(500),
  startDate DATE,
  endDate DATE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create an index for faster queries
CREATE INDEX idx_createdAt ON projects(createdAt DESC);
