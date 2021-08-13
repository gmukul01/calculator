import convertLength from '../convertLength';
import { Length } from '../types/length';

export const addLength = (length1: Length, length2: Length): Length => ({
    unit: length1.unit,
    value: length1.value + convertLength(length2, length1.unit).value
});
