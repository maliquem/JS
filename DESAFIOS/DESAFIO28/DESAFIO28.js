(function(win, doc) {
    'use strict';

  /*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."

  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
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

    var $formCEP = new DOM('[data-js="form-cep"]');
    var $inputCEP = new DOM('[data-js="input-cep"]');
    var $statusAJAX = new DOM('[data-js="status-ajax"]');
    var $cep = new DOM('[data-js="cep"]');
    var $logradouro = new DOM('[data-js="logradouro"]');
    var $bairro = new DOM('[data-js="bairro"]');
    var $cidade = new DOM('[data-js="cidade"]');
    var $estado = new DOM('[data-js="estado"]');
    var ajax = new XMLHttpRequest();
    $formCEP.on('submit', handleSubmitFormCEP)

    function handleSubmitFormCEP(event){
        event.preventDefault();
        var url = 'https://viacep.com.br/ws/[CEP]/json/'.replace('[CEP]', $inputCEP.get()[0].value.match(/\d+/g).join(''));
        console.log(url);
        ajax.open('GET', url);
        ajax.send();
        ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function handleReadyStateChange() {
        if (isRequestOk)
         fillCEPFields();
        getMessage('error'); 
    }

    function isRequestOk(){
        return ajax.readyState === 4 && ajax.status === 200;
    }

    function fillCEPFields() {
        var data = parseData();
        if(!data) 
            return console.error('DATA ERROR', data);
        getMessage('ok');
        $cep.get()[0].textContent = data.cep;
        $logradouro.get()[0].textContent = data.logradouro;
        $bairro.get()[0].textContent = data.bairro;
        $cidade.get()[0].textContent = data.localidade;
        $estado.get()[0].textContent = data.uf;        
    }

    function parseData() {
        var result;
        try {
            result = JSON.parse(ajax.responseText);
        } catch (error) {
            result = null;
        }
        return result;
    }

    function getMessage(type){
        var message = {
            loading: 'Buscando informações para o cep [CEP]...',
            ok: 'Endereço referente ao CEP [CEP]: ',
            error: 'Não encontramos o endereço para o CEP [CEP]'
        };
        $statusAJAX.get()[0].textContent = message[type].replace('[CEP]', $inputCEP.get()[0].value.match(/\d+/g).join(''));
    }

})(window, document);