function add(...params: number[]): number {
    let total:number=0;
    params.forEach(num=>{
      total+=num;
    });
    return total;
}

console.log(add(1, 2, 4, 5));
console.log(add(1, 2, 0, 1));