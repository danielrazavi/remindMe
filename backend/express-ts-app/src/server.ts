import express, { Request, Response } from "express";

const app = express();
const port = 3001;

// Retrieve and check environment variables
(async () => {
  // Routes
  app.get("/", (req: Request, res: Response) => {
    res.send("Hello, Express TypeScript! My name is Dan");
  });

  // Define a route handler for a specific endpoint
  app.get("/api/users", async (req: Request, res: Response) => {
    console.log("Hello, we're at /api/users");
  });

  // Port Listening
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
})();
