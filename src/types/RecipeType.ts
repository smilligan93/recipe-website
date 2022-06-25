import { IngredientType } from './IngredientType';
import { TemperatureType } from './TemperatureType';

export type RecipeType = {
    name: string;
    ovenTemperature?: TemperatureType;
    instructions: string | string[];
    ingredients: IngredientType[];
    subRecipes?: RecipeType[];
};
