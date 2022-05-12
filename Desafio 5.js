function myFunction() {
    var number1 = 10;
    var number2 = 20;
    console.log( 'Na função `myFunction`, o primeiro número é', number1 );
    console.log( 'Na função `myFunction`, o segundo número é', number2 );    
    return number1 + number2;
}
myFunction();

function myFunction2() {
    var number1 = 10;
    var number2 = 20;
    var sum = function sum() {
        return number1 + number2;
    };    
    console.log( 'A soma de 10 e 20 é igual a', sum ? sum() : undefined );
    return sum();
}
myFunction2();

function myFunction3() {
    var number1 = 40;
    var number2 = 50;     
    console.log( 'A soma de 40 e 50 é igual a', sum() );    
    console.log( 'Na função myFunction3, number1 é igual a', number1 );       
    function sum() {
        return number1 + number2;
    };
    return sum();
}
myFunction3();

function calculator(x, y){
    return function(callback){
        return callback(x, y);
    };
}

var sum = calculator(10, 2);
var sub = calculator(10, 2);
var mul = calculator(10, 2);
var div = calculator(10, 2);
var mod = calculator(10, 2);

console.log(sum(function (x, y) { 
    return x + y;
    })
);

console.log(sub(function (x, y) { 
    return x - y;
    })
);

console.log(mul(function (x, y) { 
    return x * y;
    })
);

console.log(div(function (x, y) { 
    return x / y;
    })
);

console.log(mod(function (x, y) { 
    return x % y;
    })
);