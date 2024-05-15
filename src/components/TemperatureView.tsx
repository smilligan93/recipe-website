import React from 'react';
import { Box, Text } from 'grommet';

export type Props = {
    temperature: string;
};

export function TemperatureView({ temperature }: Props) {
    return (
        <Box direction='row' gap='xsmall'>
            <Text>Preheat Oven to</Text>
            <Text weight='bold'>{temperature}</Text>
        </Box>
    );
}
