'use strict'

let resultado = '';

try {
    // x = 10;
    if(isNaN(resultado)) throw "No es un número";
    else if(resultado === '') throw "cadena vacia";
    else if(resultado <= 0) throw "Es un numero negativo"
}
catch (error) {
    console.log(error);
    // console.log(error.name);
    // console.log(error.message);
}