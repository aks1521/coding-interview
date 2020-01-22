console.log(alphabeticShift('crazy'));

function alphabeticShift(inputString: string): string {

    let stringToArrayString: number[] = inputString.split("").map(x => (x.charCodeAt(0)));

    for (let index = 0; index < stringToArrayString.length; index++) {
        stringToArrayString[index] = stringToArrayString[index] == 122 ? 97 : stringToArrayString[index] + 1
    }

    return stringToArrayString.map(x => String.fromCharCode(x)).join("");
}