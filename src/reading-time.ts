const readingTime = (text: string | string[]): number => {
    const wpm = 200;
    const str = typeof text === "object" ? text.join(" ") : text;
    const arr = str.split(" ");
    return arr.length > 0 ? Math.floor(arr.length / wpm) : 0;
}

export const isStringArray = (item: string | string[]): boolean => {
    return typeof item === "object";
}

export default readingTime;