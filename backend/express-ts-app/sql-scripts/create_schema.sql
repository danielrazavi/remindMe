-- Create a schema (if it doesn't already exist)
CREATE SCHEMA IF NOT EXISTS my_schema;

-- Set the search path to use the new schema
SET search_path = my_schema;

-- Create a table
CREATE TABLE IF NOT EXISTS members (
  id serial PRIMARY KEY,
  username VARCHAR (50) NOT NULL,
  email VARCHAR (100) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT current_timestamp
);
