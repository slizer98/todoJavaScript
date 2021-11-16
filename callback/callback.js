
// funciones de tipó callback
// callback es una función que se pasa como parámetro a otra función
// y se ejecuta después de que la función que la llama finalice su ejecución
let imprimir = (mensaje) =>{
    console.log(mensaje);
}

function sumar(a, b, callback){
    let resultado = a + b;
    callback(`Resultado: ${resultado}`);
}
sumar(5, 3, imprimir);