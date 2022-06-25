import React, { useState } from 'react';
import { Box, Text } from 'grommet';

export type Props = {
    instructions: string | string[];
};

export function InstructionsView({ instructions }: Props) {
    const [completedIndex, setCompletedIndex] = useState<number>(-1);
    return Array.isArray(instructions) ? (
        <Box gap='small'>
            {instructions.map((line, index) => (
                <Box direction='row' key={line} align='start' gap='small'>
                    <Box
                        border
                        round='small'
                        flex={false}
                        width='1.5rem'
                        height='1.5rem'
                        justify='center'
                        align='center'
                        background={{
                            color:
                                // eslint-disable-next-line no-nested-ternary
                                completedIndex === index - 1
                                    ? 'status-ok'
                                    : completedIndex >= index
                                    ? 'text'
                                    : undefined,
                        }}
                    >
                        <Text>{index + 1}</Text>
                    </Box>
                    <Text
                        style={{ textDecoration: completedIndex >= index ? 'line-through' : undefined }}
                        onClick={() => {
                            if (completedIndex < index) {
                                setCompletedIndex(index);
                            } else if (completedIndex > index) {
                                setCompletedIndex(index);
                            } else {
                                setCompletedIndex(-1);
                            }
                        }}
                    >
                        {line}
                    </Text>
                </Box>
            ))}
        </Box>
    ) : (
        <Text>{instructions}</Text>
    );
}
