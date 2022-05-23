var operation = {
    '+': function(x, y){
        return x + y;
    },
    '-': function(x, y){
        return x - y;
    },
    '*': function(x, y){
        return x * y;
    },
    '/': function(x, y){
        return x / y;
    },
    '%': function(x, y){
        return x % y;
    }
}

function isOperatorValid(operador){
    return !!operation[operador];
}

function calculator(operador){

    if (!isOperatorValid(operador)) {
        return false;
    }

    return function(x, y) {
        if (typeof x !== 'number' || typeof y !== 'number') {
            return false;
        }

        return operation[operador](x, y);
    }
}

function showOperationMessage(operador, x, y){
    return 'A operação ' + x + ' ' + operador + ' ' + y + ' = ';
}

function showErrorMessage(operador){
    return 'Operação "' + operador + '" não permitida!';
}

var number1 = 10;
var number2 = 5;
var operationSignal;

operationSignal = '+';
var sum = calculator(operationSignal);
sum !== false ? 
console.log(showOperationMessage(operationSignal, number1, number2), sum(number1, number2)) : 
console.log(showErrorMessage(operationSignal));

operationSignal = '-';
var subtraction = calculator(operationSignal);
subtraction !== false ? 
console.log(showOperationMessage(operationSignal, number1, number2), subtraction(number1, number2)) : 
console.log(showErrorMessage(operationSignal));

operationSignal = '*';
var multiplication = calculator(operationSignal);
multiplication !== false ? 
console.log(showOperationMessage(operationSignal, number1, number2), multiplication(number1, number2)) : 
console.log(showErrorMessage(operationSignal));

operationSignal = '/';
var division = calculator(operationSignal);
division !== false ? 
console.log(showOperationMessage(operationSignal, number1, number2), division(number1, number2)) : 
console.log(showErrorMessage(operationSignal));

operationSignal = '%';
var mod = calculator(operationSignal);
mod !== false ? 
console.log(showOperationMessage(operationSignal, number1, number2), mod(number1, number2)) : 
console.log(showErrorMessage(operationSignal));