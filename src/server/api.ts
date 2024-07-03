import { Recipe, UploadResponseData } from "@types";
import { Request, Response, Router } from "express";
import { DataSource, DeepPartial, ILike } from "typeorm";
import { isAdmin, requireAuth } from "./middleware";
import multer from "multer";
import Jimp from "jimp";
import path from "path";
import fsPromise from "fs/promises";

function loadRecipeEndpoints(): Router {
    const apiRouter = Router();
    apiRouter.use(requireAuth, isAdmin);
    apiRouter.get("/", async function (req: Request, res: Response) {
        let searchTerm = req.query.search as string;
        if (!searchTerm) {
            searchTerm = "";
        }

        const dataSource: DataSource = res.locals.dataSource;
        const recipes = (await dataSource.getRepository(Recipe).findBy({name: ILike(`%${searchTerm}%`)})).sort(
            (a, b) => b.updatedAt.getTime() - a.updatedAt.getTime()
        );
        res.json(recipes.map((r) => r.recipeData()));
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
        return res.send(results.recipeData());
    });

    apiRouter.post("/", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const body: DeepPartial<Recipe> = req.body;
        if (Array.isArray(body)) {
            return res.status(400).send("Invalid request");
        }

        const recipe = dataSource.getRepository(Recipe).create(body);
        const result = await dataSource.getRepository(Recipe).save(recipe);
        if (!result) {
            return res.status(500).send("Failed to create recipe");
        }

        if (result)
        return res.status(201).send(result.recipeData());
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
        return res.send(results.recipeData());
    });

    apiRouter.delete("/:id", async function (req: Request, res: Response) {
        const dataSource: DataSource = res.locals.dataSource;
        const results = await dataSource
            .getRepository(Recipe)
            .delete(req.params.id);

        if (results.affected === 0) {
            return res.status(404).send("Recipe not found");
        }
        
        return res.status(204).send();
    });

    return apiRouter;
}

const upload = multer({
    dest: "uploads/",
    limits: {
        fileSize: 1024 * 1024 * 5,
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/gif") {
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
            const p = path.join("photos", `${file.filename}.jpg`);
            await img.writeAsync(path.join(__dirname, p));

            await fsPromise.rm(file.path);

            const data: UploadResponseData = {
                filename: `${file.filename}.jpg`,
                mimetype: file.mimetype,
                originalname: file.originalname,
                size: file.size,
                fieldname: file.fieldname,
                path: `/${p}`,
            }
            res.status(200).send(data);
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
