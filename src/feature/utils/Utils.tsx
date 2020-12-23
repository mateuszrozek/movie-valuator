
export const castStringToNumberSafely = (str: string): number => {
    if (str === undefined) {
        return 0;
    }
    return Number(str);
}