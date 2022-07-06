(function(DOM, doc) {
  'use strict';

  function app(){
    var ajax = new XMLHttpRequest();
    var $table = doc.querySelector('[data-js="table"]');
    var $textCompany = DOM('[data-js="company-name"]');
    var $textPhone = DOM('[data-js="company-phone"]');
    var $formCARRO = DOM('[data-js="form-car"]');
    var $statusForm = DOM('[data-js="status"]');
    var $inputImagem = DOM('[data-js="input-image"]');
    var $inputMarca = DOM('[data-js="input-brand"]');
    var $inputAno = DOM('[data-js="input-year"]');
    var $inputPlaca = DOM('[data-js="input-plate"]');
    var $inputCor = DOM('[data-js="input-color"]');
    $formCARRO.on('submit', handleSubmitFormCAR);

    function getCompany(){
      ajax.open('GET', 'https://raw.githubusercontent.com/maliquem/JS/master/DESAFIOS/DESAFIO29/company.json');
      ajax.send();
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function handleReadyStateChange(){
      isRequestOk(ajax) ? fillHeader(ajax) : getMessage('ajax');      
    }

    function fillHeader(request){
      var data = JSON.parse(request.responseText);
      $textCompany.get().textContent = data.name;
      $textPhone.get().textContent = data.phone;
    }

    function isRequestOk(request){
      return request.readyState === 4 && request.status === 200;
    }

    function handleSubmitFormCAR(event){
      event.preventDefault();
      isFormComplete() ? addTableContent() : getMessage('error');
    }

    function emptyForm(){
      DOM('input').forEach(function(input){
        input.value = '';
      });
    }

    function addTableContent(){
      var $trElement = doc.createElement('tr');
      var $tbodyElement = doc.createElement('tbody');
      var $imageTable = doc.createElement('td');
      var $marcaTable = doc.createElement('td');
      var $anoTable = doc.createElement('td');
      var $placaTable = doc.createElement('td');
      var $corTable = doc.createElement('td');
      var $buttonDelete = doc.createElement('button');
      var $image = doc.createElement('img');

      $image.src = $inputImagem.get().value;
      $marcaTable.textContent = $inputMarca.get().value;
      $anoTable.textContent = $inputAno.get().value;
      $placaTable.textContent = $inputPlaca.get().value;
      $corTable.textContent = $inputCor.get().value;
      $buttonDelete.textContent = 'DEL';

      $imageTable.appendChild($image);
      $trElement.appendChild($imageTable);      
      $trElement.appendChild($marcaTable);      
      $trElement.appendChild($anoTable);      
      $trElement.appendChild($placaTable);      
      $trElement.appendChild($corTable);
      $trElement.appendChild($buttonDelete);
      $tbodyElement.appendChild($trElement);
      $table.appendChild($tbodyElement);

      getMessage('ok');
      emptyForm();
      $buttonDelete.addEventListener('click', function(event){
        event.preventDefault();
        this.parentElement.remove();
        getMessage('del');
      }, false);      
    }

    function isFormComplete(){
      var complete = true;
      DOM('input').forEach(function(input){
      if(input.value === '')
          complete = false;
      });
      return complete;      
    }

    function getMessage(type){
      var message = {
        ok: 'Carro cadastrado com sucesso!',
        error: 'Um ou mais campos, não estão preenchidos corretamente.',
        del: 'Carro excluido com sucesso!',
        ajax: 'Erro na requisição AJAX'
      };
      $statusForm.get().textContent = message[type];
    }

    getCompany();
    
  }

  app();

})(window.DOM, document);