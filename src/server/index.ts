import express, { Application } from "express";
import dotenv from "dotenv";
import http from "http";
import { ExpressAuth } from "@auth/express";
import { TypeORMAdapter } from "@auth/typeorm-adapter";
import Google from "@auth/express/providers/google";
import { Edge } from "edge.js";

const app: Application = express();

app.set("trust proxy", true);
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [Google],
    adapter: TypeORMAdapter({
      type: "postgres",
      database: process.env.AUTH_TYPEORM_DATABASE || "auth",
      username: process.env.AUTH_TYPEORM_USERNAME || "postgres",
      password: process.env.AUTH_TYPEORM_PASSWORD || "passowrd",
      host: process.env.AUTH_TYPEORM_HOST || "localhost",
      port: Number.parseInt(process.env.AUTH_TYPEORM_PORT || "") || 5432,
      synchronize: true,
      entities: [
        // Add your TypeORM entities here
      ],
    }),
  })
);

const publicDir = process.env.PUBLIC_DIR || "./public";

const edge = Edge.create();
edge.mount(new URL("./views", publicDir));

app.get("/", async (req, res) => {
  const data = {};
  const html = await edge.render("index", data);

  res.contentType("text/html").send(html);
});

app.use(express.static(publicDir));

const host = process.env.HOST || "localhost";
const port = Number.parseInt(process.env.PORT || "") || 4000;

app.listen(port, host, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`Listening at http://${host}:${port}`);
});
