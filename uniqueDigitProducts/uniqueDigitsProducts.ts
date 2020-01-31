function uniqueDigitProducts(a: number[]): number {
    let uniqueDigitProducts:number[]=[];
    let digitsArray:string[]=[];
    let productOfAnElementOfArray:number;

    a.forEach(num=>{
        digitsArray=num.toString().split("");
        productOfAnElementOfArray=getProductOfAnArrayElements(digitsArray);
        if(uniqueDigitProducts.indexOf(productOfAnElementOfArray)==-1){
            uniqueDigitProducts.push(productOfAnElementOfArray);
        };
    });
   
    return uniqueDigitProducts.length;
}

function getProductOfAnArrayElements(num: string[]):number{
  let product: number=1;
  num.forEach(element => {
    product*=parseInt(element);
  });
  return product;
}

console.log(uniqueDigitProducts([2, 8, 121, 42, 222, 23]));

console.log(uniqueDigitProducts([2, 8, 5, 433, 222, 23]));

console.log(uniqueDigitProducts([2, 6, 8, 42, 66, 16]));

console.log(uniqueDigitProducts([2, 8, 865, 42, 12, 95]));