function sumAllPrimes(num: number): number {
  let isPrimeNumber;
  let result=0;
  for(let intermediateNumber=2; intermediateNumber<=num; intermediateNumber++){
    isPrimeNumber=true;
    for(let i=2; i<= Math.floor(Math.sqrt(intermediateNumber)); i++){
        if(intermediateNumber%i==0){
            isPrimeNumber=false;
            break;
        }
    }

    if(isPrimeNumber){
        result+=intermediateNumber;
    }
  } 
  return result;
}

console.log(sumAllPrimes(10));
console.log(sumAllPrimes(977));