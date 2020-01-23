function sortByHeight(inputHeigts: number[]): number[] {
    let indexTracker:number=0;
    let filteredHeights: number[]=inputHeigts.filter(height=> height!=-1);
    filteredHeights.sort();

    for(let i:number=0; i<inputHeigts.length; i++){
        if(inputHeigts[i]!=-1){
            inputHeigts[i]=filteredHeights[indexTracker];
            indexTracker++;
        }
    }
    return inputHeigts;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));