/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
Example
 For inputArray = [2, 4, 1, 0], the output should be
 arrayMaximalAdjacentDifference(inputArray) = 3.
*/

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

function arrayMaximalAdjacentDifference(inputArray: number[]): number {

    let max = 0;
    for (let i = 1; i < inputArray.length - 1; i++) {
        // absolute difference From Previous element
        if (Math.abs(inputArray[i] - inputArray[i - 1]) > max) {
            max = Math.abs(inputArray[i] - inputArray[i - 1])
        }
        // absolute difference From Next element
        if (Math.abs(inputArray[i] - inputArray[i + 1]) > max) {
            max = Math.abs(inputArray[i] - inputArray[i + 1])
        }
    }
    return max;
}