import { LENGTH_CONVERSION_TO_MILLIMETER } from '../constants/lengthConversion';
import { Length, LengthType } from '../types/length';

export const convertLength = (length: Length, unit: LengthType): Length => ({
    unit,
    value: (length.value * LENGTH_CONVERSION_TO_MILLIMETER[length.unit]) / LENGTH_CONVERSION_TO_MILLIMETER[unit]
});
