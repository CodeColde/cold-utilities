const indexOfAll = <T>(arr: T[], val: T): Array<number> => {
    if(typeof arr !== 'object') {
        throw Error('Please pass an array');
    }
    
    return arr.reduce((acc: number[], el, i) => (
        el === val
        ? [...acc, i]
        : acc
    ), [])
};

export default indexOfAll;