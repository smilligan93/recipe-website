import React from 'react';
import { Box, Text } from 'grommet';
import { RecipeType } from '../types/RecipeType';
import { IngredientList } from './IngredientList';
import { TemperatureView } from './TemperatureView';
import { InstructionsView } from './InstructionsView';

export type Props = {
    recipe: RecipeType;
};

export function RecipeView({ recipe }: Props) {
    return (
        <Box direction='column' fill='horizontal' justify='center' align='center' gap='small' pad='small'>
            <Text size='xlarge' style={{ textDecoration: 'underline' }}>
                {recipe.name}
            </Text>
            <Box direction='column' border pad='small' round='small'>
                {recipe.ovenTemperature && (
                    <Box justify='center' align='center' margin={{ bottom: 'small' }}>
                        <TemperatureView temperature={recipe.ovenTemperature} />
                    </Box>
                )}
                <IngredientList ingredients={recipe.ingredients} />

                <Box direction='column' gap='xsmall' flex>
                    <InstructionsView instructions={recipe.instructions} />
                </Box>
            </Box>
        </Box>
    );
}
