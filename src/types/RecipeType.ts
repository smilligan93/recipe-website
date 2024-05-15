export type RecipeType = {
    name: string;
    ovenTemperature?: string;
    instructions: string[];
    ingredients: string[];
    notes?: string;
    totalTime?: string;
    quantity?: string;
};
