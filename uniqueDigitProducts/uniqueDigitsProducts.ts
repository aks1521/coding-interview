function uniqueDigitProducts(a: number[]): number {

    let b: number[] = a.map(x => x.toString().split("")
                        .map(y => parseInt(y))
                        .reduce((a, b) => a * b));

    let c: number[] = [];

    b.forEach(element => {
        if (!c.includes(element)) {
            c.push(element);
        }
    });

    return c.length;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));