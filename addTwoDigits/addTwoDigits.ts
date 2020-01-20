console.log(addTwoDigits(1234));

function addTwoDigits(input: number): number {

    let inputInArray: number[] = input.toString().split("").map(x => parseInt(x));

    var totSum = inputInArray.reduce((a, b) => a + b);

    return totSum;
}

