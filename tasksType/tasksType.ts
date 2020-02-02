function tasksTypes(deadlines: number[], day: number): number[] {

    let outputArray: number[] = [0, 0, 0];

    for (let i = 0; i < deadlines.length; i++) {
        if (deadlines[i] <= day) {
            outputArray[0] = outputArray[0] + 1;
        } else if (deadlines[i] <= day + 7) {
            outputArray[1] = outputArray[1] + 1;
        }
    }
    outputArray[2] = deadlines.length - outputArray[0] - outputArray[1];

    return outputArray;
}

console.log(tasksTypes([1, 2, 3, 4, 5], 2));
console.log(tasksTypes([1, 2, 4, 2, 10, 3, 1, 4, 5, 4, 9, 8], 1));