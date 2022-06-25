import { AmountType } from './AmountType';

export type IngredientType = {
    name: string;
    amount: AmountType;
    sub?: IngredientType;
};
