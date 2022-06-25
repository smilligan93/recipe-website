export type AmountType = MeasuredAmountType | number | string;

export type MeasuredAmountType = {
    value: number;
    unit: UnitType;
};

export type UnitType = SizeUnitType | WeightUnitType;

export type SizeUnitType = 'cup' | 'qt' | 'tsp' | 'tbsp' | 'gal';

export type WeightUnitType = 'lb' | 'oz';
