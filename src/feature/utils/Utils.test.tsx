import {castStringToNumberSafely} from "./Utils";

it('converts string to number', () => {
    const str = '5';
    const res = castStringToNumberSafely(str);
    expect(res).toBe(5);
});