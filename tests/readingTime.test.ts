import { readingTime } from '../';
import { testArticle } from './data/readingTime.data';

test('Test Article Reading Duration', () => {
    expect(readingTime(testArticle)).toBe(2);
});