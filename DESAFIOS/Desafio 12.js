/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/

/*
Crie um objeto chamado `person`, com as propriedades:
    `name`: String
    `lastname`: String
    `age`: Number
Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
de valor para cada propriedade.
*/
// ?
console.log( 'Propriedades de "person":' );
var person = { 
    name: 'Jael',
    lastname: 'Araripe Rabelo',
    age: 32
}

/*
Mostre no console, em um array, todas as propriedades do objeto acima.
Não use nenhuma estrutura de repetição, nem crie o array manualmente.
*/
// ?
var array = Object.keys(person);
console.log(array);

/*
Crie um array vazio chamado `books`.
*/
// ?
var books = [];

/*
Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
seguintes propriedades:
`name`: String
`pages`: Number
*/
// ?
console.log( '\nLista de livros:' );
var book1 = {
    name: 'Biblia',
    pages: 1200
}
var book2 = {
    name: 'Barsa',
    pages: 5600
}
var book3 = {
    name: 'JS Ninja',
    pages: 560
}
books.push(book1);
books.push(book2);
books.push(book3);

/*
Mostre no console todos os livros.
*/
// ?
console.log(Object.values(books));

console.log( '\nLivro que está sendo removido:', books.pop() );
/*
Remova o último livro, e mostre-o no console.
*/
// ?


console.log( '\nAgora sobraram somente os livros:' );
/*
Mostre no console os livros restantes.
*/
// ?
console.log(Object.values(books));

/*
Converta os objetos que ficaram em `books` para strings.
*/
// ?
console.log( '\nLivros em formato string:' );
books = JSON.stringify(books);

/*
Mostre os livros nesse formato no console:
*/
// ?
console.log(books);

/*
Converta os livros novamente para objeto.
*/
// ?
console.log( '\nAgora os livros são objetos novamente:' );
books = JSON.parse(books);

/*
Mostre no console todas as propriedades e valores de todos os livros,
no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
*/
for (var i = 0; i < books.length; i++) {
    for (var prop in books[i]) {
        console.log(prop + ": " + books[i][prop]);
    }    
}

/*
Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
seu nome. Adicione seu nome completo no array.
*/
// ?
console.log( '\nMeu nome é:' );

/*
Juntando todos os itens do array, mostre no console seu nome.
*/
// ?

console.log( '\nMeu nome invertido é:' );

/*
Ainda usando o objeto acima, mostre no console seu nome invertido.
*/
// ?

console.log( '\nAgora em ordem alfabética:' );
/*
Mostre todos os itens do array acima, odenados alfabéticamente.
*/
// ?
