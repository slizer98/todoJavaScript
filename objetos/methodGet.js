let persona = {
    nombre: 'Erick',
    apellido: 'Villafuerte',
    email: 'erick@gmail.com',
    edad: 23,
    get nombreCompleto() {//Uso de get
        return this.nombre + ' ' + this.apellido;
    }
}

// Mejores practicas para acceder y modificar los objetos
console.log(persona.nombreCompleto)