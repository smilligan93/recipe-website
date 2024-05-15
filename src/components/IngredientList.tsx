import { Box, Text } from 'grommet';
import React, { useCallback, useMemo, useState } from 'react';
import { IngredientLine } from './IngredientLine';

export type Props = {
    ingredients: string[];
};

export function IngredientList({ ingredients }: Props) {
    const [open, setOpen] = useState(true);
    const [completedIngredients, setCompletedIngredients] = useState<string[]>([]);
    const [complete, incomplete] = useMemo(() => {
        return [
            ingredients.filter((ing) => completedIngredients.includes(ing)),
            ingredients.filter((ing) => !completedIngredients.includes(ing)),
        ];
    }, [completedIngredients, ingredients]);

    const renderIngredient = useCallback(
        (ingredient: string) => {
            return (
                <IngredientLine
                    ingredient={ingredient}
                    checked={completedIngredients.includes(ingredient)}
                    onChecked={(checked) => {
                        if (checked && !completedIngredients.includes(ingredient)) {
                            setCompletedIngredients(completedIngredients.concat(ingredient));
                        } else if (!checked && completedIngredients.includes(ingredient)) {
                            const index = completedIngredients.indexOf(ingredient);
                            const newCompleted = completedIngredients.slice();
                            newCompleted.splice(index, 1);
                            setCompletedIngredients(newCompleted);
                        }
                    }}
                />
            );
        },
        [completedIngredients],
    );
    return (
        <Box direction='column'>
            <Box
                fill='horizontal'
                direction='row'
                onClick={() => setOpen(!open)}
                border
                round='small'
                justify='between'
                pad={{ horizontal: 'small', vertical: 'xsmall' }}
                margin='xsmall'
            >
                <Text>Ingredients</Text>
                <Text>{open ? 'v' : '>'}</Text>
            </Box>
            {open && (
                <Box direction='column' pad={{ horizontal: 'small' }}>
                    <Box direction='column' gap='xsmall'>
                        {complete.map((ingredient) => (
                            <React.Fragment key={ingredient}>{renderIngredient(ingredient)}</React.Fragment>
                        ))}
                        {incomplete.map((ingredient) => (
                            <React.Fragment key={ingredient}>{renderIngredient(ingredient)}</React.Fragment>
                        ))}
                    </Box>
                    <Box fill='horizontal' border margin={{ vertical: 'medium' }} />
                </Box>
            )}
        </Box>
    );
}
