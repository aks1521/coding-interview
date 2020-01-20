function allLongestStrings(inputArray: string[]): string[] {

    let maxLenthString = 0;
    inputArray.forEach(element => {
        maxLenthString = element.length > maxLenthString ? element.length : maxLenthString;
    });

    let arrrayOfMaxLenString: string[]=[];

    inputArray.forEach(element => {
        if (element.length == maxLenthString) {
            arrrayOfMaxLenString.push(element);
        }
    });

return arrrayOfMaxLenString;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));