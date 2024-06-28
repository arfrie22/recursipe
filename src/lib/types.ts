import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from "typeorm";

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

export interface RecipeInfo {
    name: string;
    description: string;
    yield: number;
    yieldUnit: string;
}

@Entity()
export class Recipe extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "jsonb" })
    info: RecipeInfo;

    @Column({ type: "jsonb" })
    ingredients: Ingredient[];

    @Column({ type: "jsonb" })
    steps: Step[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    constructor(info: RecipeInfo, ingredients: Ingredient[], steps: Step[]) {
        super();
        this.id = 0;
        this.info = info;
        this.ingredients = ingredients;
        this.steps = steps;
        this.createdAt = new Date();
        this.updatedAt = new Date();
        this.deletedAt = new Date();
    }
}


export abstract class Component {
    public render(rootElement: HTMLElement | undefined = undefined): Element {
        return document.createElement("div");
    }
}

export type ValueOf<T> = T[keyof T];
export type ElementType<T> = T extends Array<infer V> ? V : never;
export type Listeners<T> = ((event: T) => void)[];
