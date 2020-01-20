addBorder(["abcd", "ded"]);

function addBorder(picture: string[]) {

    let stringMaxLength = 0;
    let totStar="";
    picture.forEach(element => {
        stringMaxLength = stringMaxLength < element.length ? element.length : stringMaxLength;
    });

    picture.push("");
    picture.unshift("");
    
    for (let i = 0; i < picture.length; i++) {
        for (let j = 0; j < stringMaxLength - picture[i].length + 1; j++, totStar="") {
            totStar = totStar.concat("*");
        }
        picture[i] = "*".concat(picture[i], totStar);
    }

    picture.forEach(element => {
        console.log(element);
    });
}