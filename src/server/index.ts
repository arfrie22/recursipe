import "reflect-metadata";
import express, { Application } from "express";
import dotenv from "dotenv";
import http from "http";
import { ExpressAuth } from "@auth/express";
import { TypeORMAdapter } from "@auth/typeorm-adapter";
import Google from "@auth/express/providers/google";
import { Edge } from "edge.js";
import { DataSource } from "typeorm";
import { Recipe, TimeType } from "@types";

dotenv.config();

const app: Application = express();

export const dataSource = new DataSource({
    type: "postgres",
    database: process.env.AUTH_TYPEORM_DATABASE || "auth",
    username: process.env.AUTH_TYPEORM_USERNAME || "postgres",
    password: process.env.AUTH_TYPEORM_PASSWORD || "passowrd",
    host: process.env.AUTH_TYPEORM_HOST || "localhost",
    port: Number.parseInt(process.env.AUTH_TYPEORM_PORT || "") || 5432,
    synchronize: true,
    logging: true,
    entities: [
        Recipe,
    ],
});
const demoRecipe: Recipe = new Recipe(
    {
      name: "Vanilla Ice Cream",
      description:
        "A very simple vanilla ice cream recipe. Based on the recipe from the amazing David Lebovitz.",
      yield: 2,
      yieldUnit: "pt",
    },
    [
      {
        name: "heavy cream",
        quantity: 2,
        unit: "c",
      },
      {
        name: "whole milk",
        quantity: 1,
        unit: "c",
      },
      {
        name: "sugar",
        quantity: 0.75,
        unit: "c",
      },
      {
        name: "salt",
        quantity: 0.125,
        unit: "tsp",
      },
      {
        name: "vanilla extract",
        quantity: 1,
        unit: "tsp",
      },
    ],
    [
      {
        direction:
          "In a medium saucepan, warm 1 cup of the cream with the sugar, and salt till simmering.",
        time: 60 * 5,
        timeType: TimeType.Cooking,
      },
      {
        direction: "Turn off the heat and let steep for 1 hour.",
        time: 60 * 60,
        timeType: TimeType.Waiting,
      },
      {
        direction:
          "In a medium bowl, pour the remaining 1 cup of cream and set a mesh strainer on top.",
        time: 10,
        timeType: TimeType.Preparation,
      },
    ],
  );


dataSource
    .initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        
    })
    .catch((err) => {
        console.error("Error during Data Source initialization:", err)
    })


    
      

app.set("trust proxy", true);
app.use(
  "/auth/*",
  ExpressAuth({
    providers: [Google],
    adapter: TypeORMAdapter(dataSource.options),
  })
);

app.use(express.json());

// register routes
app.get("/users", async (req, res) => {
    console.log("GET /users");
    const users = await dataSource.getRepository(Recipe).find();
    res.json(users);
});


const publicDir = process.env.PUBLIC_DIR || "./public";

const edge = Edge.create();
edge.mount(publicDir);

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
