import express from "express";
import { ExpressAuth } from "@auth/express"
import { TypeORMAdapter } from "@auth/typeorm-adapter"

export const server = async () => {
  const app = express();

  app.set("trust proxy", true);
  app.use(
    "/auth/*",
    ExpressAuth({
      providers: [],
      adapter: TypeORMAdapter(process.env.AUTH_TYPEORM_CONNECTION || "sqlite://:memory:"),
    })
  );

  const publicDir = process.env.PUBLIC_DIR || "./public";

  app.get("/", (req, res) => {
    res.sendFile("index.html", { root: publicDir });
  });

  app.use(express.static(publicDir));

  const host = process.env.HOST || "localhost";
  const port = process.env.PORT || 4000;

  app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`Listening at http://${host}:${port}`)
  })
};
