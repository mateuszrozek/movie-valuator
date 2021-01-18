import {castStringToNumberSafely} from "./Utils";

it('converts string to number', () => {
    const str = '4';
    const res = castStringToNumberSafely(str);
    expect(res).toBe(4);
});