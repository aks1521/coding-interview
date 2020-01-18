/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. 
 Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

 Example
  For inputArray = [1, 1, 1], the output should be
  arrayChange(inputArray) = 3
*/

console.log(arrayChange([1, 1, 1]));

function arrayChange(inputArray: number[]): number 
{
    let count = 0;

    for (let index = 0; index < inputArray.length; index++) 
    {
        if (inputArray[index] >= inputArray[index + 1]) 
        {
            let diffrence = inputArray[index] + 1 - inputArray[index + 1];
            inputArray[index + 1] = inputArray[index] +1;
            count +=diffrence;
        }
    }
    return count;
}