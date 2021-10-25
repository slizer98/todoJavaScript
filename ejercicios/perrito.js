// Estás paseando a tu perrito y acaban de pasar enfrente de una tienda de comida para perros. En la vitrina hay dos huesos de olor y tamaño distintos. Tu perro mentalmente le asignó una calificación del 1 al 10 al olor de cada hueso y una calificación del 1 al 10 al tamaño de cada hueso. Por supuesto, tu perro preferiría que le compraras el hueso que es simultáneamente el más grande y el que huele mejor. ¿Puedes ayudarlo a determinar qué hueso comprar?

// Entrada
// Cuatro enteros L1, T1, L2, T2 que son el olor y el tamaño de los dos huesos, respectivamente. Puedes suponer que 1 <= L1, T1, L2, T2 <= 10 y que los dos huesos difieren en olor y también difieren en tamaño.

// Salida
// El mensaje Hueso 1 o Hueso 2 dependiendo de qué hueso es el que es simultáneamente el más grande y el que huele mejor. En caso de que ninguno de los dos huesos cumpla esta propiedad, imprimir el mensaje Perrito confundido :(.

let l1 = parseInt(prompt('olor del hueso 1: '))
let t1 = parseInt(prompt('tamaño del hueso 1: '))
let l2 = parseInt(prompt('olor del hueso 2: '))
let t2 = parseInt(prompt('tamaño del hueso 2: '))
salida = ''

if(l1 > l2 && t1 > t2){
    salida = 'Hueso 1'
}
else if(l1 < l2 && t1 < t2){
    salida = 'Hueso 2'
}
else{
    salida = 'Perrito confundido :('
}

document.write(salida);