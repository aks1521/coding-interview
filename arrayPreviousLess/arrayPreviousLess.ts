function arrayPreviousLess(items: number[]): number[] {
    let resultArray: number[] = [];
    let isLesserFound =false;

    for (let i = items.length - 1; i >= 0; i--) {
        isLesserFound =false;
        for (let j = i - 1; j >= 0; j--) {
            if (items[i] > items[j]) {
                resultArray.unshift(items[j]);
                isLesserFound =true;
                break;
            }
        }
        if(!isLesserFound) resultArray.unshift(-1);
    }
    return resultArray;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));