// Agregar un metodo
let persona = {
    nombre: 'Erick',
    apellido: 'Villafuerte',
    email: 'erick@gmail.com',
    edad: 23,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombreCompleto())