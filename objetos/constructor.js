// Funcion constructor de objetos de tipo persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    // metodo nombreCompleto
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}

// Creamos nuevos objetos con los mismos atribuos pero con distintos valores 
let padre = new Persona('Erick', 'Villafuerte', 'erick@gmail.com');
console.log(padre);
console.log(padre.nombreCompleto());
let madre = new Persona('Idalia', 'Mares', 'idalia@gmail.com')
console.log(madre);
console.log(madre.nombreCompleto());

// cambiar un atributo de un objeto
padre.nombre = 'Manuel'
console.log(padre);