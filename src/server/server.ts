import express from "express";
import { ExpressAuth } from "@auth/express"
import { TypeORMAdapter } from "@auth/typeorm-adapter"

export const server = async () => {
  const app = express();

  app.set("trust proxy", true)
  app.use(
    "/auth/*",
    ExpressAuth({
      providers: [],
      adapter: TypeORMAdapter(process.env.AUTH_TYPEORM_CONNECTION || "sqlite://:memory:"),
    })
  )

  app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "./public" });
  });

  app.use(express.static("./public"));

  const port = process.env.PORT || 4000

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
};
