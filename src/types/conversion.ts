import { LengthType } from './length';
import { WeightType } from './weights';

export type Conversion = {
    [k in LengthType | WeightType]: number;
};
