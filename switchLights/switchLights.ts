function switchLights(a: number[]): number[] {
   let candles : number =a.length;
   let output: number[]=[];
   let appliedIterationOnCandle: number;
   let candleState: number;
   
   for(let i:number=0; i<candles; i++){
        appliedIterationOnCandle=candles-i;
        candleState=getToggle(a[i], appliedIterationOnCandle);
        output.push(candleState); 
   }
   return output;
}

function getToggle(candleState: number, appliedIterationOnCandle:number):number{  
    let result:number;
    if(appliedIterationOnCandle%2!=0){
       result=candleState==1?0:1;
   }
   else{
       result=candleState;
   }
   return result;
}


console.log(switchLights([1, 1, 1, 1, 1]));
console.log(switchLights([0, 0]));