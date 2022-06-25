import React from 'react';
import { Box, CheckBox, Text } from 'grommet';
import { IngredientType } from '../types/IngredientType';
import convertDecimalToFraction from '../functions/convertDecimalToFraction';

export type Props = {
    ingredient: IngredientType;
    checked: boolean;
    onChecked: (checked: boolean) => void;
};

export function IngredientLine({ ingredient, checked, onChecked }: Props) {
    return (
        <Box direction='row'>
            <CheckBox
                checked={checked}
                onChange={(event) => onChecked(event.target.checked)}
                label={
                    <Box direction='row' gap='xsmall'>
                        <Text weight='bold'>{ingredient.name}</Text>
                        <Text>-</Text>
                        {/* eslint-disable-next-line no-nested-ternary */}
                        {typeof ingredient.amount === 'number' ? (
                            <Text>x{ingredient.amount}</Text>
                        ) : typeof ingredient.amount === 'string' ? (
                            <Text>{ingredient.amount}</Text>
                        ) : (
                            <>
                                <Text>{convertDecimalToFraction(ingredient.amount.value)}</Text>&nbsp;
                                <Text>{ingredient.amount.unit}</Text>
                            </>
                        )}
                    </Box>
                }
            />
        </Box>
    );
}
