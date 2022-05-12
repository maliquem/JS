function primo(x){
    while(x > 0){
        var cont = 0;

        if(x % x === 0){
            cont++;
        }

        if(x % 2 === 0 && x !== 2){
            cont++;
        }

        if(x % 3 === 0 && x !== 3){
            cont++;
        }

        if(x % 5 === 0 && x !== 5){
            cont++;
        }

        if(x % 7 === 0 && x !== 7){
            cont++;
        }

        if(x % 9 === 0 && x !== 9){
            cont++;
        }

        cont === 1 ? console.log(x) : '';
        x--;
    };    
}