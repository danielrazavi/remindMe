import express, { Request, Response } from "express";
import { Client } from "pg";
import AWS from "aws-sdk";

const app = express();
const bport = process.env.PORT ? parseInt(process.env.PORT) : 3000;

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

    // Parse the JSON data from the SSM parameter
    const dbCredentials = JSON.parse(dbCredentialsParam?.Value ?? "{}");

    // Extract the host, port, name, username, and password from the JSON data
    const { host, port, name, username, password } = dbCredentials;

    console.log(host, port, name, username, password);

    if (!host || !port || !name || !username || !password) {
      console.error("One or more SSM parameters are undefined.");
      process.exit(1);
    }

    // Create a PostgreSQL client
    const dbClient = new Client({
      host: host,
      port: parseInt(port, 10),
      database: "-",
      user: username,
      password: password,
      ssl: {
        rejectUnauthorized: false, // You might want to use true in production for increased security.
      },
    });

    // // For testing
    // const dbClient = new Client({
    //   host: "remindme-db-instance.cchgiteorrmq.us-east-1.rds.amazonaws.com",
    //   port: 5432,
    //   database: "initial_db",
    //   user: "postgres",
    //   password: "Amir3599",
    //   ssl: {
    //     rejectUnauthorized: false, // You might want to use true in production for increased security.
    //   },
    // });

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
        const query = "SELECT * FROM links";
        const result = await dbClient.query(query);

        // Send the result as a JSON response
        res.json(result.rows);
      } catch (error) {
        console.error("Error executing SQL query:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Port Listening
    app.listen(bport, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error("Error retrieving SSM parameters:", error);
    process.exit(1);
  }
})();
