function validTime(time: string): boolean {

    let hour = parseInt(time.split(":")[0]);
    let min = parseInt(time.split(":")[1]);

    if (hour >= 0 && hour <= 23) {
        if (min >= 0 && min <= 59) {
            return true;
        }
    }
    return false;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));