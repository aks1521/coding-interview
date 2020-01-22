function alphabetSubsequence(inputString: string): boolean {

    let asciCodeArrayInputString: number[] = inputString.split("").map(x => x.charCodeAt(0));

    for (let i = 1; i < asciCodeArrayInputString.length; i++) {
        if (asciCodeArrayInputString[i] <= asciCodeArrayInputString[i - 1]) {
            return false;
        }
    }
    return true;
}

console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
