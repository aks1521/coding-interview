function almostIncreasingSequence(sequence: number[]): boolean {
    let countWhenNextSequenceNumberIsSame:number=0;
    let countWhenNextSequenceNumberIsLess:number=0;

    for(let i :number=0; i<sequence.length; i++){
         if(sequence[i]==sequence[i+1]){
             countWhenNextSequenceNumberIsSame++;
         }
         else if(sequence[i]>sequence[i+1]){
            countWhenNextSequenceNumberIsLess++;
         }
    }

    if(countWhenNextSequenceNumberIsSame+countWhenNextSequenceNumberIsLess>1){
        return false;
    }
    return true;
}

console.log(almostIncreasingSequence([1, 1, 3, 4]))
console.log(almostIncreasingSequence([1, 3, 2, 3 ,6])) 