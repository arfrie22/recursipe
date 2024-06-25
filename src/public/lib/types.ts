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

export interface Recipe {
  info: RecipeInfo;
  ingredients: Ingredient[];
  steps: Step[];
}

export abstract class Component {
  public render(rootElement: HTMLElement | undefined = undefined): Element {
    return document.createElement("div");
  }
}

export type ValueOf<T> = T[keyof T];
export type ElementType<T> = T extends Array<infer V> ? V : never;
export type Listeners<T> = ((event: T) => void)[];
