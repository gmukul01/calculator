import { Length } from '../types/length';
import { addLength } from './addLength';

describe('addLength', () => {
    it('should return expected output when adding length of same unit', () => {
        const length1: Length = { value: 3, unit: 'MILLIMETER' },
            length2: Length = { value: 4, unit: 'MILLIMETER' };
        expect(addLength(length1, length2)).toEqual({ value: 7, unit: 'MILLIMETER' });
    });

    it('should return expected output when adding length of different unit', () => {
        const length1: Length = { value: 3, unit: 'MILLIMETER' },
            length2: Length = { value: 4, unit: 'CENTIMETER' };
        expect(addLength(length1, length2)).toEqual({ value: 43, unit: 'MILLIMETER' });
    });
});
