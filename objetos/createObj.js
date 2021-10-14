function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    // metodo nombreCompleto
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}
// Primer forma
let padre = new Persona('Erick', 'Villafuerte', 'erick@gmail.com');
console.log(padre);

let miObjeto = new Object();

// Segunda forma
let miObjeto2 = {};

// tipo cadena
let miCaden1 = new String('Hola');
let miCaden2 = 'Hola';

