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