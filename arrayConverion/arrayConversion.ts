/*
For a inputArray Conver array as below untill array contains only one element

On the 1,3,4,5.. Itrations  => Replcae each pair of consucative elements with their sum.
On the 2,4,6,..  Itrations  => Replcae each pair of consucative elements with their Multiplication

Example 1
for inputArray =[1,2,3,4,5,6,7,8] the output should be arrayConverion(inputArray) = 186
=> [1,2,3,4,5,6,7,8] => [3,7,11,15] => [21,165]  => 186 
*/

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