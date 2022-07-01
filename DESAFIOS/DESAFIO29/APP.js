(function(DOM, doc) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

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
      isRequestOk(ajax) ? fillHeader() : getMessage('ajax');      
    }

    function fillHeader(){
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
      $marcaTable.innerHTML = $inputMarca.get().value;
      $anoTable.innerHTML = $inputAno.get().value;
      $placaTable.innerHTML = $inputPlaca.get().value;
      $corTable.innerHTML = $inputCor.get().value;
      $buttonDelete.innerHTML = 'DEL';

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