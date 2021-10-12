let persona = {
    nombre: 'Erick',
    apellido: 'Villafuerte',
    email: 'erick@gmail.com',
    edad: 23,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

// Forma normal
console .log(persona);

// Otras formas
// concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido );

// iterar usando for in
for(propiedades in persona){
    console.log(persona[propiedades]);
}

// sintaxis Object.values
// convierte un objeto a un arreglo
let personaArray = Object.values(persona);
console.log(personaArray);

// Con string
// JSON convierte el objeto en cadenas
let personaString = JSON.stringify(persona);
console.log(personaString)