import express, { Request, Response } from "express";
import { Client } from "pg";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Retrieve and check environment variables
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;
const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;

if (!dbHost || !dbPort || !dbName || !dbUser || !dbPassword) {
  console.error(
    "Missing or undefined environment variables for database connection."
  );
  process.exit(1); // Exit the application
}

// Convert the port to a number
const portNumber = parseInt(dbPort, 10);

// Create a PostgreSQL client
const dbClient = new Client({
  host: dbHost,
  port: portNumber,
  database: dbName,
  user: dbUser,
  password: dbPassword,
});

dbClient
  .connect()
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error: Error) => {
    console.error("Database connection error:", error);
  });

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express TypeScript! My name is Dan");
});

// Define a route handler for a specific endpoint
app.get("/api/users", async (req: Request, res: Response) => {
  try {
    // Execute an SQL query to retrieve data
    const query = "SELECT * FROM users";
    const result = await dbClient.query(query);

    // Send the result as a JSON response
    res.json(result.rows);
  } catch (error) {
    console.error("Error executing SQL query:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Port Listening
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
