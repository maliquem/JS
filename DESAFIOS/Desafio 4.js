var sum = function calculateSum(x, y){
    console.log('A soma de ' + x + ' e ' + y + ' é igual a ' + (x + y));
}

sum(8, 10);
console.log(sum.name);

var nome = function nomeFuncao(func){
    console.log('O nome da função que faz a soma é ' + func.name);
}

nome(sum);

var varShowName = function showName(){
    console.log(varShowName.name);
}

varShowName();

function calculator(oper){
    return function(x, y){
        if(oper === '+'){
            console.log('Resultado da operação: ' + x + ' ' + oper + ' ' + y + ' = ' + (x + y));
        } else if(oper === '-'){
            console.log('Resultado da operação: ' + x + ' ' + oper + ' ' + y + ' = ' + (x - y));
        } else if(oper === '*'){
            console.log('Resultado da operação: ' + x + ' ' + oper + ' ' + y + ' = ' + (x * y));
        } else if(oper === '/'){
            console.log('Resultado da operação: ' + x + ' ' + oper + ' ' + y + ' = ' + (x / y));
        } else if(oper === '%'){
            console.log('Resultado da operação: ' + x + ' ' + oper + ' ' + y + ' = ' + (x % y));
        } else {
            console.log('Operação inválida.');
        }
    }
}

var sum = calculator('+');
var sub = calculator('-');
var mul = calculator('*');
var div = calculator('/');
var mod = calculator('%');