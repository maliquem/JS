(function(win, doc) {
    'use strict';

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

    win.DOM = DOM;

})(window, document);