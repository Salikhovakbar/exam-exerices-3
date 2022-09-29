  function sumOfNegatives(){
       let numbers = [1, 8, -7, -5];
 let positiveNumbers  = numbers.filter(i => i > 0)
 let negativeNumbers  = numbers.filter(i => i < 0)

 console.log(positiveNumbers);
 console.log(negativeNumbers);
 return negativeNumbers, positiveNumbers
}
 sumOfNegatives();