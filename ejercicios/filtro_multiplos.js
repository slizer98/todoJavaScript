// Escribe un programa que lea una secuencia de n enteros y un entero k y que reimprima la secuencia dada, reemplazando los enteros que no son múltiplos de k por una X mayúscula

// Un entero n seguido de n enteros y un entero k. Puedes suponer que todos los enteros están en el rango de 1 a 100.

// La secuencia leída con los elementos que no son múltiplos de k reemplazados por una X mayúscula.

let n = parseInt(prompt("dime el total de datos"));
let a = [];

for (let i = 0; i < n; i++){
    a.push(parseInt(prompt(`ingresa el numero ${i}`)));
}
let k = parseInt(prompt('dime el multiplo que quieras'));

for (let i = 0; i < n; i++){
    if(a[i] % k == 0){
        document.write(a[i]);
    }else{
        document.write('X');
    }
}