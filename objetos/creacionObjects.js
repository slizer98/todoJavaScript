// forma mas comun
let persona = {
    nombre: 'Erick',
    apellido: 'Villafuerte',
    email: 'erick@gmail.com',
    edad: 23,
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

// con new
let persona2 = new Object();
persona2.nombre = 'Erick';
persona2.direccion = 'gabino 411';
persona2.tel = '464102902';
console.log(persona2)