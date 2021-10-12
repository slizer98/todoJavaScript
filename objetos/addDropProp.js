let persona = {
    nombre: 'Erick',
    apellido: 'Villafuerte',
    email: 'erick@gmail.com',
    edad: 23,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}
// Agregar nueva propiedad
persona.tel = '4641710498';
// Modificar valor
persona.tel = '464111111';

// Eliminar propiedad
delete persona.tel;

console.log(persona)