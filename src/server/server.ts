import express, { Application, NextFunction, Request, Response } from "express";
import { ExpressAuth } from "@auth/express";
import { TypeORMAdapter } from "@auth/typeorm-adapter";
import Google from "@auth/express/providers/google";
import { engine as handlebarsEngine } from 'express-handlebars';
import { DataSource } from "typeorm";
import { Recipe, TimeType } from "@types";
import favicon from "serve-favicon";
import path from "path";
import { loadAPIEndpoints } from "./api";
import { authSession } from "./middleware";

export async function init() {
    const app: Application = express();

   const dataSource = new DataSource({
        type: "postgres",
        database: process.env.TYPEORM_DATABASE || "auth",
        username: process.env.TYPEORM_USERNAME || "postgres",
        password: process.env.TYPEORM_PASSWORD || "passowrd",
        host: process.env.TYPEORM_HOST || "localhost",
        port: Number.parseInt(process.env.TYPEORM_PORT || "") || 5432,
        synchronize: true,
        entities: [Recipe],
    });
    
    const demoRecipe: Recipe = new Recipe({
        info: {
            name: "Vanilla Ice Cream",
            description:
                "A very simple vanilla ice cream recipe. Based on the recipe from the amazing David Lebovitz.",
            yield: 2,
            yieldUnit: "pt",
        },
        ingredients: [
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
        recursiveIngredients: [],
        steps: [
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
        ]
    });

    const demoRecipe2: Recipe = new Recipe({
        info: {
            name: "Ice Cream 2",
            description:
                "If ice cream is so good why haven't they made an ice cream 2?",
            yield: 4,
            yieldUnit: "pt",
        },
        ingredients: [],
        recursiveIngredients: [
            {
                id: 0,
                quantity: 2,
            }
        ],
        steps: []
    });

    await dataSource.initialize();

    if (process.env.DEMO_MODE?.toLowerCase() === "true") {
        console.log("Loading demo data");
        await dataSource.getRepository(Recipe).clear();
        const recipe = dataSource.getRepository(Recipe).create(demoRecipe);
        const res = await dataSource.getRepository(Recipe).save(recipe);

        demoRecipe2.recursiveIngredients[0].id = res.id;
        const recipe2 = dataSource.getRepository(Recipe).create(demoRecipe2);
        await dataSource.getRepository(Recipe).save(recipe2);
    }

    app.set("trust proxy", true);

    const authConfig = {
        providers: [Google],
        sessionName: 'session',
        adapter: TypeORMAdapter({
            ...dataSource.options,
            entities: [],
            synchronize: false,
        }),
    };

    app.use(
        "/auth/*",
        ExpressAuth(authConfig)
    );

    app.use(authSession(authConfig));

    app.engine('.hbs', handlebarsEngine({
        extname: '.hbs',
        defaultLayout: false
    }));
    app.set('view engine', '.hbs');
    app.set('views', path.join(__dirname, 'views'));

    app.use(express.json());
    
    app.use((req, res, next) => {
        res.locals.dataSource = dataSource;
        next();
    });

    app.use(favicon(path.join(__dirname, 'static', 'favicon.ico')))

    app.get("/editor", function (req: Request, res: Response) {
        if (!res.locals.session) {
            return res.redirect("/auth/signin");
        }

        const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];
        if (!adminEmails.includes(res.locals.session.user.email)) {
            return res.render("error", {
                code: 403,
                message: "Forbidden",
                description: "You do not have permission to access this page."
            });
        }

        res.render("editor");
    });
    app.use("/photos", express.static(path.join(__dirname, "photos")));

    app.use("/api", loadAPIEndpoints());

    app.use(express.static(path.join(__dirname, 'public')));

    app.get("/", function (req: Request, res: Response) {
        res.render("index");
    });

    app.get("*", function (req: Request, res: Response) {
        return res.render("error", {
            code: 404,
            message: "Not Found",
            description: "The requested resource was not found on this server."
        });
    });

    const host = process.env.HOST || "localhost";
    const port = Number.parseInt(process.env.PORT || "") || 4000;

    app.listen(port, host, () => {
        console.log(`Example app listening on port ${port}`);
        console.log(`Listening at http://${host}:${port}`);
    });
}
