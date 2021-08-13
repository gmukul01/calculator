import { Length } from '../types/length';
import { Weight } from '../types/weights';
import { add } from './add';

describe('add', () => {
    it('should return expected output when adding length of same unit', () => {
        const length1: Length = { value: 3, unit: 'MILLIMETER' },
            length2: Length = { value: 4, unit: 'MILLIMETER' };
        expect(add<Length>(length1, length2)).toEqual({ value: 7, unit: 'MILLIMETER' });
    });

    it('should return expected output when adding length of different unit', () => {
        const length1: Length = { value: 3, unit: 'MILLIMETER' },
            length2: Length = { value: 4, unit: 'CENTIMETER' };
        expect(add<Length>(length1, length2)).toEqual({ value: 43, unit: 'MILLIMETER' });
    });

    it('should return expected output when adding weights of different unit', () => {
        const weight1: Weight = { value: 3, unit: 'GRAMS' },
            weight2: Weight = { value: 4, unit: 'KILOGRAMS' };
        expect(add<Weight>(weight1, weight2)).toEqual({ value: 4003, unit: 'GRAMS' });
    });
});
