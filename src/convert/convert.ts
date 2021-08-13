import { CONVERSION } from '../constants/conversion';
import { Length } from '../types/length';
import { Weight } from '../types/weights';

export const convert = <T extends Length | Weight>(base: T, targetUnit: T['unit']): T =>
    ({
        unit: targetUnit,
        value: (base.value * CONVERSION[base.unit]) / CONVERSION[targetUnit]
    } as T);
