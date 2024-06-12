import { createServer } from "http";
import express from "express";

export const server = async () => {
  const app = express();

  app.get("/", (req, res) => {
    res.sendFile("index.html", { root: __dirname });
  });

  const server = createServer(app);

  server.listen(4000, () => {
    console.log(`Server running in 4000`);
  });
};
