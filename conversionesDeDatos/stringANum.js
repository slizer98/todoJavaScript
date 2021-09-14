// convertir una cadena de caracteres a numericos
let miNumero = "18"
console.log(typeof miNumero)

// con la funcion Number() convertimos un string a numero
let edad = Number(miNumero);
console.log(typeof edad);

if (edad >= 18){
    console.log('puede votar');
}else{
    console.log('muy joven para votar')
}

// operador ternario
let mayor = (edad >= 18) ? 'Puedes votar' : 'muy joven para votar';
console.log(mayor)