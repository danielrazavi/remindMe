import express, { Request, Response } from "express";
import { Client } from "pg";
import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Initialize AWS SDK
AWS.config.update({ region: "us-east-1" }); // Set the AWS region

// Create an SSM client
const ssm = new AWS.SSM();

// Retrieve and check environment variables
(async () => {
  try {
    const dbCredentialsParam = (
      await ssm
        .getParameter({ Name: "/myapp/database", WithDecryption: true })
        .promise()
    )?.Parameter;
    // const dbPortParam = (
    //   await ssm
    //     .getParameter({ Name: "/myapp/database/port", WithDecryption: true })
    //     .promise()
    // )?.Parameter;
    // const dbNameParam = (
    //   await ssm
    //     .getParameter({ Name: "/myapp/database/name", WithDecryption: true })
    //     .promise()
    // )?.Parameter;
    // const dbUserParam = (
    //   await ssm
    //     .getParameter({ Name: "/myapp/database/user", WithDecryption: true })
    //     .promise()
    // )?.Parameter;
    // const dbPasswordParam = (
    //   await ssm
    //     .getParameter({
    //       Name: "/myapp/database/password",
    //       WithDecryption: true,
    //     })
    //     .promise()
    // )?.Parameter;

    // Parse the JSON data from the SSM parameter
    const dbCredentials = JSON.parse(dbCredentialsParam?.Value ?? "{}");

    // Extract the host, port, name, username, and password from the JSON data
    const { host, port, name, username, password } = dbCredentials;

    if (!host || !port || !name || !username || !password) {
      console.error("One or more SSM parameters are undefined.");
      process.exit(1);
    }

    // Create a PostgreSQL client
    const dbClient = new Client({
      host: host,
      port: parseInt(port, 10),
      database: name,
      user: username,
      password: password,
    });

    console.log("Connecting to the database...");
    await dbClient.connect();
    console.log("Connected to the database");

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
  } catch (error) {
    console.error("Error retrieving SSM parameters:", error);
    process.exit(1);
  }
})();
