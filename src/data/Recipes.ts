import { RecipeType } from '../types/RecipeType';

const TeriyakiStirFry: RecipeType = {
    name: 'Teriyaki Stir-Fry',
    ovenTemperature: { value: 350, unit: 'f' },
    ingredients: [
        { name: 'Chicken Breast (Cubed)', amount: 3 },
        { name: 'White Rice', amount: 'Preference' },
        { name: 'Salt', amount: 'to Taste' },
        { name: 'Pepper', amount: 'to Taste' },
        { name: 'Garlic (Crushed)', amount: { value: 1, unit: 'tsp' } },
        { name: 'Soy Sauce', amount: { value: 0.5, unit: 'cup' } },
        { name: 'Honey', amount: { value: 1 / 3, unit: 'cup' } },
        { name: 'Mirin (rice wine)', amount: { value: 2, unit: 'tbsp' } },
        {
            name: 'Sesame Seeds',
            amount: { value: 1.5, unit: 'tbsp' },
            sub: { name: 'Sesame Oil', amount: { value: 1, unit: 'tbsp' } },
        },
        {
            name: 'Red Pepper Flakes',
            amount: { value: 1, unit: 'tsp' },
            sub: {
                name: 'Dried Chilies (whole)',
                amount: '1 - 2',
            },
        },
        {
            name: 'Onion (sliced)',
            amount: 1,
        },
        {
            name: 'Bell Pepper (small, thinly sliced)',
            amount: 2,
        },
        {
            name: 'Broccoli',
            amount: { value: 2, unit: 'cup' },
        },
        {
            name: 'Green Onion (thinly sliced)',
            amount: 1,
        },
    ],
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

const Recipes: RecipeType[] = [TeriyakiStirFry];

export default Recipes;
