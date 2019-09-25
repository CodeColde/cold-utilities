import { stripHTMLTags } from '../';
import { mediumTagDifficulty, mediumTagResult, easyTagDifficulty, easyTagResult } from './data/stripTags.data';

describe('Stripping HTML Tags', () => {
    test('HTML Tags are stripped and a string is provided', () => {
        expect(stripHTMLTags(easyTagDifficulty)).toBe(easyTagResult);
        expect(stripHTMLTags(mediumTagDifficulty)).toBe(mediumTagResult);
    });
});