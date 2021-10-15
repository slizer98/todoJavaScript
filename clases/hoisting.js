// No es posible crear objetos antes de declarar la clase, no se aplica
// el concepto de hoisting

// creando una clase en javaScript
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
}

// Creando objetos de tipo persona
let persona1 = new Persona('Erick', 'Villafuerte');
persona1.nombre = 'Manuel';//SET nombre
// Mandar llamar el nombre con GET
console.log(persona1.nombre)
