(function(win, doc) {
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $buttonClear = doc.querySelector('[data-id="button-operation-ce"]');
    var $buttonDel = doc.querySelector('[data-id="button-operation-del"]');
    var $buttonEqual = doc.querySelector('[data-id="button-operation-equal"]');
    var regexNumbers = /(\d+)/g;
    var regexOperations = /([-+x÷])/g;

    function handleClickNumber(event){
        $visor.value == 0 ? 
        $visor.value = this.value : 
        $visor.value = $visor.value + '' + this.value;
    };

    function handleClickOperation(event){
        $visor.value.endsWith('+') || $visor.value.endsWith('-') || $visor.value.endsWith('x') || $visor.value.endsWith('÷') ?
        $visor.value = $visor.value.slice(0, -1) + this.value : 
        $visor.value = $visor.value + '' + this.value;
    };

    function operatorEnd(){
        win.alert('A EQUAÇÃO NÂO PODE TERMINAR COM UMA OPERAÇÃO!!');
        $visor.value = $visor.value.slice(0, -1);
    };

    Array.prototype.forEach.call($buttonsNumbers, function(buttonNumber) {
        buttonNumber.addEventListener('click', handleClickNumber, false);
    });    

    Array.prototype.forEach.call($buttonsOperations, function(buttonOperation) {
        buttonOperation.addEventListener('click', handleClickOperation, false);
    });

    $buttonClear.addEventListener('click', function(){
        $visor.value = '0';
    });

    $buttonDel.addEventListener('click', function(){
        $visor.value = $visor.value.slice(0, -1);
    });

    $buttonEqual.addEventListener('click', function(){
        if($visor.value.endsWith('+') || $visor.value.endsWith('-') || $visor.value.endsWith('x') || $visor.value.endsWith('÷'))
            operatorEnd();
        
        var arrNumbers = $visor.value.match(regexNumbers);
        var arrOperations = $visor.value.match(regexOperations);
        var resultado = arrNumbers[0];

        arrOperations.forEach(function(ope, index){
            if(ope === '+')
                resultado = +resultado + +arrNumbers[index+1];
            if(ope === '-')
                resultado = +resultado - +arrNumbers[index+1];
            if(ope === 'x')
                resultado = +resultado * +arrNumbers[index+1];
            if(ope === '÷')
                resultado = +resultado / +arrNumbers[index+1];            
        });

        $visor.value = resultado;
    });


})(window, document);