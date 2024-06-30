import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    CreateDateColumn,
    DeleteDateColumn,
    UpdateDateColumn,
} from "typeorm";

export const PlaceholderImage = "https://placehold.co/600x400/EEE/31343C";

export interface UploadResponseData {
    filename: string;
    mimetype: string;
    originalname: string;
    size: number;
    fieldname: string;
    path: string;
}

export interface Ingredient {
    name: string;
    quantity: number;
    unit: string;
}

export enum TimeType {
    Cooking = "Cooking",
    Preparation = "Preparation",
    Waiting = "Waiting",
}

export interface Step {
    direction: string;
    time: number;
    timeType: TimeType;
}

export interface RecursiveIngredient {
    id: number;
    quantity: number;
}

export interface RecipeInfo {
    name: string;
    description: string;
    photo?: string;
    yield: number;
    yieldUnit: string;
}

export interface RecipeData {
    id?: number;
    info: RecipeInfo;
    ingredients: Ingredient[];
    recursiveIngredients: RecursiveIngredient[];
    steps: Step[];
}

@Entity()
export class Recipe extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text" })
    name: string;

    @Column({ type: "text" })
    description: string;

    @Column({ type: "text", nullable: true })
    photo?: string;

    @Column({ type: "float" })
    yield: number;

    @Column({ type: "text" })
    yieldUnit: string;

    @Column({ type: "jsonb" })
    ingredients: Ingredient[];

    @Column({ type: "jsonb" })
    recursiveIngredients: RecursiveIngredient[];

    @Column({ type: "jsonb" })
    steps: Step[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date | null;

    public info(): RecipeInfo {
        return {
            name: this.name,
            description: this.description,
            photo: this.photo,
            yield: this.yield,
            yieldUnit: this.yieldUnit,
        };
    }

    public updateInfo(info: RecipeInfo) {
        this.name = info.name;
        this.description = info.description;
        this.photo = info.photo;
        this.yield = info.yield;
        this.yieldUnit = info.yieldUnit;
    }

    public recipeData(): RecipeData {
        return {
            id: this.id,
            info: this.info(),
            ingredients: this.ingredients,
            recursiveIngredients: this.recursiveIngredients,
            steps: this.steps,
        };
    }

    constructor(
        recipeData?: RecipeData,
    ) {
        super();
        
        if (recipeData) {
            const { info, ingredients, recursiveIngredients, steps } = recipeData;

            this.id = recipeData.id || 0;
            this.name = info.name;
            this.description = info.description;
            this.photo = info.photo;
            this.yield = info.yield;
            this.yieldUnit = info.yieldUnit;
            this.ingredients = ingredients;
            this.recursiveIngredients = recursiveIngredients;
            this.steps = steps;
        } else {
            this.id = 0;
            this.name = "";
            this.description = "";
            this.photo = "";
            this.yield = 0;
            this.yieldUnit = "";
            this.ingredients = [];
            this.recursiveIngredients = [];
            this.steps = [];
        }

        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.deletedAt = null;
    }
}

export class RecipeCache {
    private cache: Record<number, Recipe> = {};

    static async fetchRecipe(id: number): Promise<Recipe> {
        let res = await fetch(`/api/recipes/${id}`);
        if (!res.ok) {
            throw new Error(`Failed to fetch recipe: ${res.statusText}`);
        }

        return new Recipe(await res.json());
    }

    public async search(searchTerm: string): Promise<Recipe[]> {
        let res = await fetch(`/api/recipes?search=${searchTerm}`);
        if (!res.ok) {
            throw new Error(`Failed to search for recipes: ${res.statusText}`);
        }

        const recipeData = await res.json() as RecipeData[];
        const recipes = recipeData.map((r: RecipeData) => new Recipe(r));
        recipes.forEach((r) => this.cache[r.id] = r);
        return recipes;
    }

    public async get(id: number): Promise<Recipe> {
        let recipe = this.cache[id];

        if (!recipe) {
            recipe = await RecipeCache.fetchRecipe(id);
            this.cache[id] = recipe;
        }

        return recipe;
    }
}

export abstract class Component {
    public async render(rootElement: HTMLElement | undefined = undefined): Promise<Element> {
        return document.createElement("div");
    }
}

export type ValueOf<T> = T[keyof T];
export type ElementType<T> = T extends Array<infer V> ? V : never;
export type Listeners<T> = ((event: T) => void)[];
