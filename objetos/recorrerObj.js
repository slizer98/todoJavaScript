let persona = {
    nombre: 'Erick',
    apellido: 'Villafuerte',
    email: 'erick@gmail.com',
    edad: 23,
}

// Forma normal
console.log(persona.apellido);

// como arreglo
console.log(persona['apellido'])

// Recorrer un arreglo con For in
for (nombrePropiedades in persona){
    console.log(nombrePropiedades);
    console.log(persona[nombrePropiedades]);
}