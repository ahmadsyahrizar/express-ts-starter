import express, { Express, Response } from "express";

const app: Express = express();
const port = 3000;

app.get("/", (_, res: Response) => {
  res.send("TEST EXPRESS API WITH GITHUB ACTION AND FLY IO DEPLOYMENT");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
