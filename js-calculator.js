//a simple calculator

//operation functions
function add(a, b){
    return a + b;
}

function subt(a, b){
    return a - b;
}

function multy(a, b){
    return a * b;
}

function divs(a, b){
    return a / b;
}


//declare global variables
let firstNum, secondNum, result, operation, userInput;

//prompt user to select operation
userInput = parseInt(prompt('Welcome, which operation will you like to perform:\n Press 1 for Addition \n Press 2 for Subtraction \n Press 3 for Multiplication \n Press 4 for Division'))

//prompt and store the numbers
firstNum = parseFloat(prompt('Enter the first number'));
secondNum = parseFloat(prompt('Enter the second number'));

//conditional statement for the operations
if (userInput === 1){
        result = add(firstNum, secondNum)
        operation = 'Addition'
    }
else if (userInput === 2){
        result = subt(firstNum, secondNum)
        operation = 'Subtraction'
    }
else if (userInput === 3){
        result = multy(firstNum, secondNum)
        operation = 'Multiplication'
    }
else if (userInput === 4){
        result = divs(firstNum, secondNum)
        operation = 'Division'
    }
else if(userInput > 4){
        alert('Invalid operation')
    }
else {
        alert('Invalid selection')
    }

//final result
alert('Result for '+operation+ ': ' +result)


