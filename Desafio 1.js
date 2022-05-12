var pessoa = {
    nome: "Jael", 
    sobrenome: "Araripe Rabelo", 
    sexo: "Masculino", 
    idade: 32, 
    altura: 1.90, 
    peso: 110,
    andando: false,
    caminhouQuantosMetros: 0
};

pessoa.fazerAniversario = function(){
    pessoa.idade++;
}

pessoa.andar = function(x){
    pessoa.caminhouQuantosMetros += x;
    pessoa.andando = true;
}

pessoa.parar = function(){
    pessoa.andando = false;
}

pessoa.nomeCompleto = function(){
    return pessoa.nome + " " + pessoa.sobrenome;
}

pessoa.mostrarIdade = function(){
    return "Eu tenho " + pessoa.idade + " anos!";
}

pessoa.mostrarPeso = function(){
    return "Eu peso " + pessoa.peso + "Kg.";
}

pessoa.mostrarAltura = function(){
    return "Minha altura é " + pessoa.altura + "m.";
}

pessoa.apresentacao = function(){
    var sexo = "o ";
    var idade = " anos";
    var metro = "metros";

    if(pessoa.sexo === "Feminino"){
        sexo = "a ";
    }

    if(pessoa.idade === 1){
        idade = " ano";
    }

    if(pessoa.caminhouQuantosMetros === 1){
        metro = "metro";
    }

    return "Olá, eu sou " + sexo + pessoa.nomeCompleto() + ", tenho " + pessoa.idade + idade + ", " + pessoa.altura + ", meu peso é " + pessoa.peso + " e, só hoje, eu já caminhei " + pessoa.caminhouQuantosMetros + " " + metro + "!";
}