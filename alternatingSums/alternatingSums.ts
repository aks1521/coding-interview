function alternatingSums(a: number[]): number[] {

    let isOdd = true;
    let first = 0, second = 0;

    for (let i = 0; i < a.length; i++ , isOdd = !isOdd) {
        if (isOdd) {
            first += a[i];
        } else {
            second += a[i];
        }
    }

    return [first, second];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))
console.log(alternatingSums([2, 4, 2, 4, 2]))