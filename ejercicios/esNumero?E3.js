// Ver si la variable es un numero o no con la funcion isNaN()
let miNumero = "18x";

let edad = Number(miNumero);
console.log(typeof edad);

if (isNaN(edad)){
    console.log('no es un numero');
}else{
    if (edad >= 18){
        console.log('puede votar');
    }else{
        console.log('muy joven para votar')
    }
}


let mayor = (edad >= 18) ? 'Puedes votar' : 'muy joven para votar';
console.log(mayor)