import { Recipe } from "@types";
import { Request, Response, Router } from "express";
import { DataSource } from "typeorm";

function loadRecipeEndpoints(): Router {
    const apiRouter = Router()
    apiRouter.get("/", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const users = await dataSource.getRepository(Recipe).find()
        res.json(users)
    })

    apiRouter.get("/:id", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const id = Number.parseInt(req.params.id);
        if (!id) {
            return res.status(400).send("Invalid ID")
        }

        const results = await dataSource.getRepository(Recipe).findOneBy({id})
        if (!results) {
            return res.status(404).send("User not found")
        }
        return res.send(results)
    })

    apiRouter.post("/", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const user = dataSource.getRepository(Recipe).create(req.body)
        const results = await dataSource.getRepository(Recipe).save(Recipe)
        return res.send(results)
    })

    apiRouter.put("/:id", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const id = Number.parseInt(req.params.id);
        if (!id) {
            return res.status(400).send("Invalid ID")
        }

        const user = await dataSource.getRepository(Recipe).findOneBy({id})
        if (!user) {
            return res.status(404).send("User not found")
        }

        dataSource.getRepository(Recipe).merge(user, req.body)
        const results = await dataSource.getRepository(Recipe).save(Recipe)
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