import { Recipe } from "@types";
import { Request, Response, Router } from "express";
import { DataSource } from "typeorm";

function loadRecipeEndpoints(): Router {
    const apiRouter = Router()
    apiRouter.get("/", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const recipes = (await dataSource.getRepository(Recipe).find()).sort((a, b) => b.updatedAt.getTime() - a.updatedAt.getTime())
        res.json(recipes)
    })

    apiRouter.get("/:id", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const id = Number.parseInt(req.params.id);
        if (!id) {
            return res.status(400).send("Invalid ID")
        }

        const results = await dataSource.getRepository(Recipe).findOneBy({id})
        if (!results) {
            return res.status(404).send("Recipe not found")
        }
        return res.send(results)
    })

    apiRouter.post("/", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const recipe = dataSource.getRepository(Recipe).create(req.body)
        const results = await dataSource.getRepository(Recipe).save(recipe)
        return res.send(results)
    })

    apiRouter.put("/:id", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const id = Number.parseInt(req.params.id);
        if (!id) {
            return res.status(400).send("Invalid ID")
        }

        const recipe = await dataSource.getRepository(Recipe).findOneBy({id})
        if (!recipe) {
            return res.status(404).send("Recipe not found")
        }

        dataSource.getRepository(Recipe).merge(recipe, req.body)
        const results = await dataSource.getRepository(Recipe).save(recipe)
        return res.send(results)
    })

    apiRouter.delete("/:id", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const results = await dataSource.getRepository(Recipe).delete(req.params.id)
        return res.send(results)
    })

    return apiRouter
}

export function loadAPIEndpoints(): Router {
    const router = Router();
    router.use("/recipes", loadRecipeEndpoints());

    return router;
}