(function(win, doc) {
    'use strict';

    var $visor = doc.querySelector('[data-js="visor"]');
    var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
    var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
    var $buttonClear = doc.querySelector('[data-js="button-operation-ce"]');
    var $buttonDel = doc.querySelector('[data-js="button-operation-del"]');
    var $buttonEqual = doc.querySelector('[data-js="button-operation-equal"]');
    var regexNumbers = /(\d+)/g;
    var regexOperations = new RegExp('([' + getOperations().join() + '])', 'g');

    function initialize(){
        initializeEvents();
    };
    
    function initializeEvents() {
        Array.prototype.forEach.call($buttonsNumbers, function(buttonNumber) {
        buttonNumber.addEventListener('click', handleClickNumber, false);
        });
        Array.prototype.forEach.call($buttonsOperations, function(buttonOperation) {
            buttonOperation.addEventListener('click', handleClickOperation, false);
        });
        $buttonClear.addEventListener('click', handleClickClear, false);
        $buttonDel.addEventListener('click', handleClickDel, false);
        $buttonEqual.addEventListener('click', handleClickEqual, false);
    };

    function getOperations() {
        return Array.prototype.map.call($buttonsOperations, function(button) {
            return button.value;
        });
    };

    function handleClickNumber(){        
        $visor.value == 0 ? $visor.value = this.value : 
        verifyIfVisorEndWithOperator() && this.value == 0 ? $visor.value = $visor.value + '' :
        $visor.value += this.value;
    };

    function handleClickOperation(){
        verifyIfVisorEndWithOperator() ?
        $visor.value = $visor.value.slice(0, -1) + this.value : 
        $visor.value += this.value;
    };

    function handleClickEqual(){
        visorEndWithOperator();        
        var arrNumbers = $visor.value.match(regexNumbers);
        var arrOperations = $visor.value.match(regexOperations);
        var resultado = arrNumbers[0];
        $visor.value = equalResult(arrNumbers, arrOperations, resultado);
        
    };

    function equalResult(arrNum, arrOpe, result){
        arrOpe.forEach(function(ope, index){
            if(ope === '+')
                result = +result + +arrNum[index+1];
            if(ope == '-')
                result = +result - +arrNum[index+1];
            if(ope === 'x')
                result = +result * +arrNum[index+1];
            if(ope === '÷')
                result = +result / +arrNum[index+1];            
        });
        return result;
    };

    function handleClickClear(){
        $visor.value = '0';
    };

    function handleClickDel(){
        $visor.value = $visor.value.slice(0, -1);
    };

    function verifyIfVisorEndWithOperator(){
        var arrOperations = getOperations();
        var endsWithOperator = false;
        arrOperations.forEach(function(ope){
            endsWithOperator = endsWithOperator || $visor.value.endsWith(ope);
        })
        return endsWithOperator;
    };

    function visorEndWithOperator(){
        if(verifyIfVisorEndWithOperator()){
            handleClickDel();
        }
    };

    initialize();

})(window, document);