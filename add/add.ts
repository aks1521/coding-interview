function add(...params: number[]): number {

    let sumVal = 0;
    params.forEach(element => {
        sumVal += element;
    });

    return sumVal;
}

console.log(add(1, 2, 4, 5));
console.log(add(1, 2, 0, 1));