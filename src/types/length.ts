export type LengthType = 'CENTIMETER' | 'METER' | 'MILLIMETER';

export type Length = {
    value: number;
    unit: LengthType;
};
