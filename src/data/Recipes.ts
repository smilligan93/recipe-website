import { RecipeType } from '../types/RecipeType';

const TeriyakiStirFry: RecipeType = {
    name: 'Teriyaki Stir-Fry',
    ovenTemperature: '350 F',
    ingredients: [],
    instructions: [
        'In a pan, cook cut chicken over medium-high heat until almost done',
        'Reduce heat to medium and stir in the crushed garlic.',
        'Add in the soy sauce, honey, and 1 tablespoon of the sesame seeds. Stir until thickened.',
        'Remove the chicken from the pan, leaving the sauce, and add the vegetables to the pan.',
        'Cover the pan for several minutes and cook until the vegetables begin to soften, then remove the lid and stir until the sauce is thick again.',
        'Split the rice, vegetables, and chicken evenly between 4 containers.',
        'Top with a sprinkle of sesame seeds and sliced green onion.',
        'Refrigerate for up to 4 days.',
        'Enjoy!',
    ],
};

const MinestroneSoup: RecipeType = {
    name: 'Minestrone Soup',
    ingredients: [],
    instructions: [
        'In a pan, cook cut chicken over medium-high heat until almost done',
        'Reduce heat to medium and stir in the crushed garlic.',
        'Add in the soy sauce, honey, and 1 tablespoon of the sesame seeds. Stir until thickened.',
        'Remove the chicken from the pan, leaving the sauce, and add the vegetables to the pan.',
        'Cover the pan for several minutes and cook until the vegetables begin to soften, then remove the lid and stir until the sauce is thick again.',
        'Split the rice, vegetables, and chicken evenly between 4 containers.',
        'Top with a sprinkle of sesame seeds and sliced green onion.',
        'Refrigerate for up to 4 days.',
        'Enjoy!',
    ],
};

const Recipes: RecipeType[] = [TeriyakiStirFry, MinestroneSoup];

export default Recipes;
