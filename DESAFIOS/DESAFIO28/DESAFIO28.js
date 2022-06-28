(function(DOM) {
    'use strict';

    function app(){

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
            getMessage('loading');
            var url = replaceCEP('https://viacep.com.br/ws/[CEP]/json/');
            ajax.open('GET', url);
            ajax.send();        
            ajax.addEventListener('readystatechange', handleReadyStateChange);
        }

        function cleanCEP(cep){
            return cep.get()[0].value.replace(/\D/g, '');
        }

        function handleReadyStateChange() {
            isRequestOk() ? fillCEPFields() : emptyCEPFields(); 
        }

        function isRequestOk(){
            return ajax.readyState === 4 && ajax.status === 200;
        }

        function emptyCEPFields(){
            getMessage('error');
            $cep.get()[0].textContent = '-';
            $logradouro.get()[0].textContent = '-';
            $bairro.get()[0].textContent = '-';
            $cidade.get()[0].textContent = '-';
            $estado.get()[0].textContent = '-';        
        }

        function fillCEPFields() {
            var data = parseData();
            if(!data) 
                return console.error('DATA ERROR', data);
            getMessage('ok');        
            $cep.get()[0].textContent = data.cep;
            $cidade.get()[0].textContent = data.localidade;
            $logradouro.get()[0].textContent = data.logradouro;
            $bairro.get()[0].textContent = data.bairro;        
            $estado.get()[0].textContent = data.uf;
            if(data.erro)
                emptyCEPFields();        
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
            $statusAJAX.get()[0].textContent = replaceCEP(message[type]);
        }

        function replaceCEP(message){
            return message.replace('[CEP]', cleanCEP($inputCEP));
        }

        return {
            getMessage: getMessage,
            replaceCEP: replaceCEP
        }
    }

    app();

})(window.DOM);