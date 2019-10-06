import { indexOfAll } from '../';
import {
    numberArrOne,
    numberArray,
    numberArrThree,
    stringArray,
    stringArrA,
    stringArrB,
    mixedArray,
    mixedArrA,
    mixedArrOne
} from './data/indexOfAll.data';

describe('List all indexes of an array', () => {
    test('Provided the array is of a correct format, returns the list of indices', () => {
        expect(indexOfAll(numberArray, 1)).toStrictEqual(numberArrOne);
        expect(indexOfAll(numberArray, 3)).toStrictEqual(numberArrThree);

        expect(indexOfAll(stringArray, 'a')).toStrictEqual(stringArrA);
        expect(indexOfAll(stringArray, 'b')).toStrictEqual(stringArrB);
        
        expect(indexOfAll(mixedArray, 'a')).toStrictEqual(mixedArrA);
        expect(indexOfAll(mixedArray, 1)).toStrictEqual(mixedArrOne);
    });
});