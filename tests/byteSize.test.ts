import { longString, byte, emoji, string } from "./data/byteSize.data";
import { byteSize } from "..";


describe('I want to check the byte size of an string', () => {
    test('Some string checks', () => {
        expect(byteSize(longString)).toStrictEqual(541);
        expect(byteSize(byte)).toStrictEqual(1);
        expect(byteSize(emoji)).toStrictEqual(4);
        expect(byteSize(string)).toStrictEqual(11);
    });
});