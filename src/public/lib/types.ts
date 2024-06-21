export interface Ingredient {
    name: string;
    quantity: number;
    unit: string;
}

export enum TimeType {
    Cooking = 'Cooking',
    Preparation = 'Preparation',
    Waiting = 'Waiting'
}

export interface Step {
    direction: string;
    time: number;
    timeType: TimeType;
}

export type ValueOf<T> = T[keyof T];
export type ElementType<T> = T extends Array<infer V> ? V : never;
export type Listeners<T> = ((event: T)=>void)[];