import convert from '../convert';
import { Length } from '../types/length';
import { Weight } from '../types/weights';

export const add = <T extends Length | Weight>(target: T, base: T): T =>
    ({
        unit: target.unit,
        value: target.value + convert<T>(base, target.unit).value
    } as T);
