// Uso de prototype
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    // metodo nombreCompleto
    this.nombreCompleto = function () {
        return this.nombre + ' ' + this.apellido;
    }
}
// Si queremos agregar una nueva propiedad sin ponerla en el objeto usamos prototype
Persona.prototype.tel = '4422233';

// el numero de telefono se agrego a todos los objetos de tipo persona
let padre = new Persona('Erick', 'Villafuerte', 'erick@gmail.com');
console.log(padre.tel)
let madre = new Persona('man', 'Villa', 'man@gmail.com');
console.log(madre.tel)