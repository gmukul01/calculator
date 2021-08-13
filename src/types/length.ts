export type LengthType = 'CENTIMETER' | 'METER' | 'MILLIMETER';

export type Length = {
    value: number;
    unit: LengthType;
};

export type LengthConversion = {
    [k in LengthType]: number;
};
