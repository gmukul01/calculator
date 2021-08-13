export type WeightType = 'GRAMS' | 'KILOGRAMS' | 'POUNDS';

export type Weight = {
    value: number;
    unit: WeightType;
};
