function reverseAString(str: string): string {
    let charArray=str.split("");
    let reverseString="";
    for(let i=charArray.length-1; i>=0; i--){
        reverseString+=charArray[i];
    }
    return reverseString;
}

console.log(reverseAString('hello'));
console.log(reverseAString('Howdy'));