//function to calculate sum of even numbers
function sumofEvenNum(num){
  let sum = 0, result;
   if(typeof num !== "number"){
    return "Not a number"
  }
  //sum of even numbers
  for(let i=1; i <= num; i++){
    if (i % 2 === 0){
      sum = sum + i;
      }
    }
    result = `The Sum of Even numbers between (1 and ${num}) is ${sum}`;
    return result;
  }

//function takes two input and output the sum of even numbers
function sumofTwoEvenNum(firstNum, secondNum){
   let sum=0, result;
    if(typeof firstNum !== "number" || typeof secondNum !== "number"){
    return "Not a number"
  }
   for(let i=firstNum; i<=secondNum; i++){
     if(i % 2 === 0){
       sum = sum + i;
     }
   }
   result = `The Sum of Even numbers between (${firstNum} and ${secondNum}) is ${sum}`;
  return result
 }

console.log(sumofEvenNum(10));
console.log(sumofTwoEvenNum(1, 10));
