import React from 'react';
import { Box, Text } from 'grommet';
import { TemperatureType } from '../types/TemperatureType';

export type Props = {
    temperature: TemperatureType;
};

export function TemperatureView({ temperature }: Props) {
    return (
        <Box direction='row' gap='xsmall'>
            <Text>Preheat Oven to</Text>
            <Text weight='bold'>
                {temperature.value} ˚{temperature.unit.toUpperCase()}
            </Text>
        </Box>
    );
}
