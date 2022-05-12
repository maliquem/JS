function book(x){
    var livros = {
        'Biblia': {
            quantidadePaginas: 1200,
            autor: 'Apostolos',
            editora: 'Todas'
        },

        'JS Ninja': {
            quantidadePaginas: 330,
            autor: 'Daciuk',
            editora: 'udemy'
        },

        'Spring Expert': {
            quantidadePaginas: 850,
            autor: 'Dougglas',
            editora: 'udemy'
        }
    };

    return !x ? livros : livros[x];
};