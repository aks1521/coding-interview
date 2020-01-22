function areSimilar(a: number[], b: number[]): boolean {

    let c: number[] = [];
    let d: number[] = [];
    let count = 0;

    if (a.toString() == b.toString()) {
        return true;
    }

    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            count++;
            if (count > 2) return false;
            c.push(a[i]);
            d.push(b[i]);
        }
    }

    if (c.toString() == d.reverse().toString()) {
        return true;
    }

    return false;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
