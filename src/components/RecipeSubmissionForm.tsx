import React, { useMemo, useState } from 'react';
import { Box, Button, Text, TextArea, TextInput } from 'grommet';
import { RecipeType } from '../types/RecipeType';
import { RecipeView } from './RecipeView';

export type RecipeSubmissionFormProps = {
    onSubmit: (recipe: RecipeType) => void;
};

export function RecipeSubmissionForm({ onSubmit }: RecipeSubmissionFormProps) {
    const [recipe, setRecipe] = useState<RecipeType>({ name: '', instructions: [], ingredients: [] });

    const handleParse = (value: string) => {
        return value
            .split(/[\n\r]+/)
            .map((i) => i.trim())
            .filter((i) => i !== '');
    };

    const handleSubmit = () => {
        onSubmit(recipe);
    };

    return (
        <Box gap='medium'>
            <Box direction='row' fill>
                <Box direction='column' gap='small' flex='grow'>
                    <Text>Name</Text>
                    <TextInput
                        value={recipe.name}
                        onChange={(event) => setRecipe({ ...recipe, name: event.target.value })}
                    />
                    <Box direction='row' gap='medium' justify='center'>
                        <Box direction='column'>
                            <Text>Oven Temp</Text>
                            <TextInput
                                value={recipe.ovenTemperature}
                                onChange={(event) => setRecipe({ ...recipe, ovenTemperature: event.target.value })}
                            />
                        </Box>
                        <Box direction='column'>
                            <Text>Total Time</Text>
                            <TextInput
                                value={recipe.totalTime}
                                onChange={(event) => setRecipe({ ...recipe, totalTime: event.target.value })}
                            />
                        </Box>
                        <Box direction='column'>
                            <Text>Quantity</Text>
                            <TextInput
                                value={recipe.quantity}
                                onChange={(event) => setRecipe({ ...recipe, quantity: event.target.value })}
                            />
                        </Box>
                    </Box>
                    <Text>Ingredients</Text>
                    <TextArea
                        value={recipe.ingredients.join('\n')}
                        onChange={(event) => setRecipe({ ...recipe, ingredients: handleParse(event.target.value) })}
                    />
                    <Text>Instructions</Text>
                    <TextArea
                        value={recipe.instructions.join('\n')}
                        onChange={(event) => setRecipe({ ...recipe, instructions: handleParse(event.target.value) })}
                    />
                    <Text>Notes</Text>
                    <TextArea
                        value={recipe.notes}
                        onChange={(event) => setRecipe({ ...recipe, notes: event.target.value })}
                    />
                </Box>
                <Box flex='grow'>
                    <RecipeView recipe={recipe} />
                </Box>
            </Box>

            <Button label='Submit' onClick={() => handleSubmit()} />
        </Box>
    );
}
