import { Recipe } from "@types";
import { Request, Response, Router } from "express";
import { DataSource } from "typeorm";
import { isAdmin, requireAuth } from "./middleware";
import multer from "multer";
import Jimp from "jimp";
import fs from 'fs';

function loadRecipeEndpoints(): Router {
    const apiRouter = Router();
    apiRouter.use(requireAuth, isAdmin);
    apiRouter.get("/", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const recipes = (await dataSource.getRepository(Recipe).find()).sort(
            (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()
        );
        res.json(recipes);
    });

    apiRouter.get("/:id", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const id = Number.parseInt(req.params.id);
        if (!id) {
            return res.status(400).send("Invalid ID");
        }

        const results = await dataSource
            .getRepository(Recipe)
            .findOneBy({ id });
        if (!results) {
            return res.status(404).send("Recipe not found");
        }
        return res.send(results);
    });

    apiRouter.post("/", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const recipe = dataSource.getRepository(Recipe).create(req.body);
        const results = await dataSource.getRepository(Recipe).save(recipe);
        return res.send(results);
    });

    apiRouter.put("/:id", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const id = Number.parseInt(req.params.id);
        if (!id) {
            return res.status(400).send("Invalid ID");
        }

        const recipe = await dataSource.getRepository(Recipe).findOneBy({ id });
        if (!recipe) {
            return res.status(404).send("Recipe not found");
        }

        dataSource.getRepository(Recipe).merge(recipe, req.body);
        const results = await dataSource.getRepository(Recipe).save(recipe);
        return res.send(results);
    });

    apiRouter.delete("/:id", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const results = await dataSource
            .getRepository(Recipe)
            .delete(req.params.id);
        return res.send(results);
    });

    return apiRouter;
}

const upload = multer({
    dest: "uploads/",
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith("image/")) {
            cb(null, true);
        } else {
            return cb(new Error("Invalid mime type"));
        }
    },
});

function loadPhotoUploadEndpoints(): Router {
    const apiRouter = Router();
    apiRouter.use(requireAuth, isAdmin);

    const uploadSingleImage = upload.single("image");

    apiRouter.post("/", async function (req: Request, res: Response) {
        uploadSingleImage(req, res, async function (err) {
            if (err) {
                return res.status(400).send({ message: err.message });
            }

            const file = req.file;
            if (!file) {
                return res.status(400).send({ message: "No file uploaded" });
            }

            const img = await Jimp.read(file.path);
            await img.writeAsync(`images/${file.filename}.jpg`)

            res.status(200).send({
                filename: `${file.filename}.jpg`,
                mimetype: file.mimetype,
                originalname: file.originalname,
                size: file.size,
                fieldname: file.fieldname,
            });
        });
    });

    return apiRouter;
}

export function loadAPIEndpoints(): Router {
    const router = Router();
    router.use("/recipes", loadRecipeEndpoints());
    router.use("/photo", loadPhotoUploadEndpoints());

    return router;
}
