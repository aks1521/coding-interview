function validTime(time: string): boolean {
   let timeArr=time.split(':');
   let hours: number =parseInt(timeArr[0]);
   let min: number =parseInt(timeArr[1]);
   if(hours==24 && min==0){
       return true;
   }
   else if(hours<24 && min<60){
       return true;
   }

   return false;
}

console.log(validTime('13:58'));
console.log(validTime('25:51'));
console.log(validTime('02:76'));