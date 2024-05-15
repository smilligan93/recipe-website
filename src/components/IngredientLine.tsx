import React from 'react';
import { Box, CheckBox, Text } from 'grommet';

export type Props = {
    ingredient: string;
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
                        <Text>{ingredient}</Text>
                    </Box>
                }
            />
        </Box>
    );
}
