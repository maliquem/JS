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
    var $textCompany = new DOM('[data-js="empresa"]')
    var $textPhone = new DOM('[data-js="telefone"]')
    var $formCARRO = new DOM('[data-js="form-carro"]');
    var $statusForm = new DOM('[data-js="status"]');
    var $table = doc.querySelector('[data-js="table"]')
    var $inputImagem = new DOM('[data-js="input-imagem"]');
    var $inputMarca = new DOM('[data-js="input-marca"]');
    var $inputAno = new DOM('[data-js="input-ano"]');
    var $inputPlaca = new DOM('[data-js="input-placa"]');
    var $inputCor = new DOM('[data-js="input-cor"]');
    var ajax = new XMLHttpRequest();
    $formCARRO.on('submit', handleSubmitFormCARRO);

    function getCompany(){
      var url = 'https://raw.githubusercontent.com/maliquem/JS/master/DESAFIOS/DESAFIO29/company.json'
      ajax.open('GET', url);
      ajax.send();        
      ajax.addEventListener('readystatechange', handleReadyStateChange);
    }

    function handleReadyStateChange(){
      var data = parseData();
      $textCompany.get()[0].textContent = data.name;
      $textPhone.get()[0].textContent = data.phone;
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

    function handleSubmitFormCARRO(event){
      event.preventDefault();
      isFormComplete() ? addTableContent() : getMessage('error');
    }

    function emptyForm(){
      $inputImagem.get()[0].value = '';
      $inputMarca.get()[0].value = '';
      $inputAno.get()[0].value = '';
      $inputPlaca.get()[0].value = '';
      $inputCor.get()[0].value = '';
    }

    function addTableContent(){
      var trElement = doc.createElement('tr');
      var tbodyElement = doc.createElement('tbody');
      var imageTable = doc.createElement('td');
      var marcaTable = doc.createElement('td');
      var anoTable = doc.createElement('td');
      var placaTable = doc.createElement('td');
      var corTable = doc.createElement('td');
      var buttonDelete = doc.createElement('button');
      imageTable.innerHTML = $inputImagem.get()[0].value;
      marcaTable.innerHTML = $inputMarca.get()[0].value;
      anoTable.innerHTML = $inputAno.get()[0].value;
      placaTable.innerHTML = $inputPlaca.get()[0].value;
      corTable.innerHTML = $inputCor.get()[0].value;
      buttonDelete.innerHTML = 'DEL';
      trElement.appendChild(imageTable);      
      trElement.appendChild(marcaTable);      
      trElement.appendChild(anoTable);      
      trElement.appendChild(placaTable);      
      trElement.appendChild(corTable);
      trElement.appendChild(buttonDelete);
      tbodyElement.appendChild(trElement);
      $table.appendChild(tbodyElement);
      getMessage('ok');
      emptyForm();
      buttonDelete.addEventListener('click', function(event){
        event.preventDefault();
        this.parentElement.remove();
        getMessage('del');
      }, false);      
    }

    function isFormComplete(){
      var complete = true;
      if($inputImagem.get()[0].value === '')
        complete = false;
      if($inputMarca.get()[0].value === '')
        complete = false;
      if($inputAno.get()[0].value === '')
        complete = false;
      if($inputPlaca.get()[0].value === '')
        complete = false;
      if($inputCor.get()[0].value === '')
        complete = false;
      return complete;      
    }

    function getMessage(type){
      var message = {
        ok: 'Carro cadastrado com sucesso!',
        error: 'Um ou mais campos, não estão preenchidos corretamente.',
        del: 'Carro excluido com sucesso!'
      };
      $statusForm.get()[0].textContent = message[type];
    }

    getCompany();
    
  }

  app();

})(window.DOM, document);