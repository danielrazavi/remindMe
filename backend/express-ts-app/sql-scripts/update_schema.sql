-- Set the search path to use the existing schema
SET search_path = my_schema;

-- Add a new column to the 'users' table
ALTER TABLE users
ADD COLUMN last_login TIMESTAMPTZ;
