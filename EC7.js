// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('john'); //False


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragons1 = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
let name = 'John';
let array = [];
dragons1.forEach(user => {
    if(user.includes(name)){
       array.push(user)
    }
});
console.log(array);


// #3) Create a function that calculates the power of 100 of a number entered as a parameter
const powerCal = (num => num**100);

// calculate the power of 100 with Math method
const powerCalMathfunction = (num => Math.pow(num, 100));


// #4) Useing your function from #3, put in the parameter 10000. What is the result?
//Result is Infinity
// Research for yourself why you get this result: 
//A number reaches Infinity when it exceeds the upper limit for a number: 1.797693134862315E+308.