(function(win, doc) {
    'use strict';

/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

    function DOM(elements){
        this.element = doc.querySelectorAll(elements);     
    }

    DOM.prototype.on = function on(event, callback){
        Array.prototype.forEach.call(this.element, function(element) {
            element.addEventListener(event, callback, false);
        });
    };
    DOM.prototype.off = function off(event, callback){
        Array.prototype.forEach.call(this.element, function(element) {
            element.removeEventListener(event, callback, false);
        });
    };
    DOM.prototype.get = function get(){
        return this.element;
    };
    DOM.prototype.forEach = function forEach(){
        return Array.prototype.forEach.apply(this.element, arguments);
    }
    DOM.prototype.map = function map(){
        return Array.prototype.map.apply(this.element, arguments);
    }
    DOM.prototype.filter = function filter(){
        return Array.prototype.filter.apply(this.element, arguments);
    }
    DOM.prototype.reduce = function reduce(){
        return Array.prototype.reduce.apply(this.element, arguments);
    }
    DOM.prototype.reduceRight = function reduceRight(){
        return Array.prototype.reduceRight.apply(this.element, arguments);
    }
    DOM.prototype.every = function every(){
        return Array.prototype.every.apply(this.element, arguments);
    }
    DOM.prototype.some = function some(){
        return Array.prototype.some.apply(this.element, arguments);
    }

    DOM.isThat = function isThat(param){
        function is(par){
            return Object.prototype.toString.call(param);
        }
        if(is(param) === '[object Array]')
            return 'Array';
        if(is(param) === '[object Object]')
            return 'Object';
        if(is(param) === '[object Function]')
            return 'Function';
        if(is(param) === '[object Number]')
            return 'Number';
        if(is(param) === '[object String]')
            return 'String';
        if(is(param) === '[object Boolean]')
            return 'Boolean';
        if(is(param) === '[object Undefined]')
            return 'Undefined';
        if(is(param) === '[object Null]')
            return 'Null';
    }

    console.log(DOM.isThat(function(){}));

})(window, document);