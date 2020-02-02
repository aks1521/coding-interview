function avoidObstacles(inputArray: number[]): number {

    inputArray = inputArray.sort();
    let maxVal: number = inputArray[inputArray.length - 1];

    for (let j = 2; j <= maxVal + 1; j++) {
        if (inputArray.every(x => (x % j !== 0))) {
            return j;
        }
    }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));