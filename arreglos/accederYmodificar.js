// Acceder a elementos de un arreglo
const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

console.log(autos[0]);
console.log(autos[2]);
console.log(autos[1]);

for (let i = 0; i<autos.length; i++){
    console.log(i+1 + '-' + autos[i])
}

//Modificar  
autos[1] = "MercedesBenz";
console.log(autos[1]);

// Agregar --------------------------------------------------
autos.push('Audi');
console.log(autos);

// con length
console.log(autos.length);
autos[autos.length] = 'Cadillac';
console.log(autos);

// Dejando espacios vacios
autos[6] ='Porshe'
console.log(autos);

// Preguntar si es un array
console.log(typeof autos); //X
console.log(Array.isArray(autos));
console.log(autos instanceof Array);