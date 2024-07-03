import express, { Application, NextFunction, Request, Response } from "express";
import { ExpressAuth } from "@auth/express";
import { TypeORMAdapter } from "@auth/typeorm-adapter";
import Google from "@auth/express/providers/google";
import { engine as handlebarsEngine } from "express-handlebars";
import { DataSource, In } from "typeorm";
import { Ingredient, PlaceholderImage, Recipe, TimeType } from "@types";
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
        ],
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
            },
        ],
        steps: [],
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
        sessionName: "session",
        adapter: TypeORMAdapter({
            ...dataSource.options,
            entities: [],
            synchronize: false,
        }),
    };

    app.use("/auth/*", ExpressAuth(authConfig));

    app.use(authSession(authConfig));

    app.engine(
        ".hbs",
        handlebarsEngine({
            extname: ".hbs",
            defaultLayout: false,
            helpers: {
                PlaceholderImage: () => PlaceholderImage,
                Dividerify: (obejects: object[]) => {
                    const result = [];
                    for (let i = 0; i < obejects.length; i++) {
                        if (i !== 0) {
                            result.push({ divider: true });
                        }
                        result.push({
                            data: obejects[i],
                            divider: false,
                        });
                    }

                    return result;
                },
            },
        })
    );
    app.set("view engine", ".hbs");
    app.set("views", path.join(__dirname, "views"));

    app.use(express.json());

    app.use((req, res, next) => {
        res.locals.dataSource = dataSource;
        next();
    });

    app.use(favicon(path.join(__dirname, "static", "favicon.ico")));

    app.get("/editor", function (req: Request, res: Response) {
        if (!res.locals.session) {
            return res.redirect("/auth/signin");
        }

        const adminEmails = process.env.ADMIN_EMAILS?.split(",") || [];
        if (!adminEmails.includes(res.locals.session.user.email)) {
            return res.render("error", {
                isSignedIn: res.locals.isSignedIn,
                isAdmin: res.locals.isAdmin,
                code: 403,
                message: "Forbidden",
                description: "You do not have permission to access this page.",
            });
        }

        res.render("editor", {
            isSignedIn: res.locals.isSignedIn,
            isAdmin: res.locals.isAdmin,
        });
    });
    app.use("/photos", express.static(path.join(__dirname, "photos")));

    app.use("/api", loadAPIEndpoints());

    app.use(express.static(path.join(__dirname, "public")));

    app.get("/", async function (req: Request, res: Response) {
        const recipes = (await dataSource.getRepository(Recipe).find()).sort(
            (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()
        );
        res.render("index", { 
            isSignedIn: res.locals.isSignedIn,
            isAdmin: res.locals.isAdmin,
            recipes
        });
    });

    interface DecomposeResults {
        id: number;
        depth: number;
        multiplier: number;
    }

    function decomposeRecipe(recipe: Recipe, recipeCache: Record<number, Recipe>, seen: Set<number>): DecomposeResults[] {
        if (seen.has(recipe.id)) {
            throw new Error("Circular reference detected");
        }

        seen.add(recipe.id);
        const results: DecomposeResults[] = [{
            id: recipe.id,
            depth: seen.size,
            multiplier: 1,
        }];

        for (const ingredient of recipe.recursiveIngredients) {
            const subRecipe = recipeCache[ingredient.id];
            const subResults = decomposeRecipe(subRecipe, recipeCache, new Set(seen));
            for (const result of subResults) {
                results.push({
                    id: result.id,
                    depth: result.depth,
                    multiplier: result.multiplier * ingredient.quantity,
                });
            }
        }

        return results;
    }

    function combineResults(results: DecomposeResults[]): DecomposeResults[] {
        const combined: Record<number, DecomposeResults> = {};
        for (const result of results) {
            if (!combined[result.id]) {
                combined[result.id] = result;
            } else {
                combined[result.id].multiplier += result.multiplier;
                combined[result.id].depth = Math.max(combined[result.id].depth, result.depth);
            }
        }

        const list = Object.values(combined);
        list.sort((a, b) => b.depth - a.depth);

        return list;
    }

    app.get("/recipe/:id", async function (req: Request, res: Response) {
        const id = Number.parseInt(req.params.id);
        if (!id) {
            return res.render("error", {
                isSignedIn: res.locals.isSignedIn,
                isAdmin: res.locals.isAdmin,
                code: 400,
                message: "Bad Request",
                description: "The request was malformed.",
            });
        }

        let recipeQueue = new Set([id]);
        const recipeCache: Record<number, Recipe> = {};

        while (recipeQueue.size > 0) {
            const recipes = await dataSource.getRepository(Recipe).findBy({
                id: In([...recipeQueue]),
            });

            if (recipes.length !== recipeQueue.size) {
                return res.render("error", {
                    isSignedIn: res.locals.isSignedIn,
                    isAdmin: res.locals.isAdmin,
                    code: 404,
                    message: "Not Found",
                    description:
                        "The requested resource was not found on this server.",
                });
            }

            for (const recipe of recipes) {
                recipeCache[recipe.id] = recipe;
            }

            recipeQueue = new Set();

            for (const recipe of recipes) {
                for (const ingredient of recipe.recursiveIngredients) {
                    if (!recipeCache[ingredient.id]) {
                        recipeQueue.add(ingredient.id);
                    }
                }
            }
        }

        let recipe = recipeCache[id];

        try {
            const decomposed = decomposeRecipe(recipe, recipeCache, new Set());
            const combined = combineResults(decomposed);

            const data = combined.map((result) => {
                const subRecipe = recipeCache[result.id];
                if (!subRecipe) {
                    throw new Error("Recipe not found");
                }

                const ingredients = subRecipe.ingredients.map((ingredient) => {
                    return {
                        name: ingredient.name,
                        quantity: ingredient.quantity * result.multiplier,
                        unit: ingredient.unit,
                    };
                });

                for (const recursive of subRecipe.recursiveIngredients) {
                    const recipe = recipeCache[recursive.id];
                    if (!recipe) {
                        throw new Error("Recipe not found");
                    }

                    ingredients.push({
                        name: recipe.name,
                        quantity: recursive.quantity * result.multiplier * recipe.yield,
                        unit: recipe.yieldUnit,
                    });
                }

                return {
                    name: subRecipe.name,
                    ingredients,
                    steps: subRecipe.steps,
                };
            });


            const time: Record<TimeType | "Total", number> = {
                [TimeType.Preparation]: 0,
                [TimeType.Cooking]: 0,
                [TimeType.Waiting]: 0,
                Total: 0,
            };

            for (const result of data) {
                for (const step of result.steps) {
                    time[step.timeType] += step.time;
                    time.Total += step.time;
                }
            }

            return res.render("recipe", { 
                isSignedIn: res.locals.isSignedIn,
                isAdmin: res.locals.isAdmin,
                name: recipe.name,
                description: recipe.description,
                photo: recipe.photo,
                yeild: recipe.yield,
                yeildUnit: recipe.yieldUnit,
                time,
                data,
            });
        } catch (e) {
            return res.render("error", {
                isSignedIn: res.locals.isSignedIn,
                isAdmin: res.locals.isAdmin,
                code: 500,
                message: "Internal Server Error",
                description: "An internal server error occurred",
            });
        }
    });

    app.get("*", function (req: Request, res: Response) {
        return res.render("error", {
            isSignedIn: res.locals.isSignedIn,
            isAdmin: res.locals.isAdmin,
            code: 404,
            message: "Not Found",
            description: "The requested resource was not found on this server.",
        });
    });

    const host = process.env.HOST || "localhost";
    const port = Number.parseInt(process.env.PORT || "") || 4000;

    app.listen(port, host, () => {
        console.log(`Example app listening on port ${port}`);
        console.log(`Listening at http://${host}:${port}`);
    });
}
