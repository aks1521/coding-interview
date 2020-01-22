console.log(arrayConverion([1, 2, 3, 4,5,6,7,8]));

function arrayConverion(inputArray: number[]): number {
    let isOdd = true;

    while (inputArray.length > 1) {
        inputArray = conversionOnIttration(inputArray,isOdd);
        isOdd = !isOdd;
    }
    return inputArray[0];
}

function conversionOnIttration(inputArray:number[],isOdd:boolean) {
    let outArray: number[] = [];
    if (isOdd) {
        for (let i = 0; i < inputArray.length; i += 2) {
            outArray.push(inputArray[i] + inputArray[i+1]);
        }
    }
    else {
        for (let i = 0; i < inputArray.length; i += 2) {
            outArray.push(inputArray[i] * inputArray[i+1]);
        }
    }
    return outArray;
}