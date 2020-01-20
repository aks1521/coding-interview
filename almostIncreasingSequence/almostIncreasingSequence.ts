function almostIncreasingSequence(sequence: number[]): boolean {
    let lastMin = sequence[0];
    let firstOrLess = true;

    for (let i = 1; i < sequence.length; i++) {
        if (sequence[i] <= sequence[i-1]) {
            if (!firstOrLess) { return false }
            firstOrLess = false;
            lastMin = sequence[i-1];
        } else { 
            lastMin = sequence[i-1]; 
        }
    }

    return true;
}

console.log(almostIncreasingSequence([1, 1, 3, 4]))
console.log(almostIncreasingSequence([1, 3, 2, 3 ,6])) 