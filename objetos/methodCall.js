let persona1 ={
    nombre: 'Erick',
    apellido: 'Villafuerte',
    // tambien pueden recibir un argumento con call
    nombreCompleto: function (titulo, tel) {
        return titulo+ ': ' + this.nombre+ ' ' +this.apellido+ ', '+ tel;
    }
}

let persona2 ={
    nombre: 'manuel',
    apellido: 'Ramirez',
}

// Uso de call para usar el metodo nombreCompleto 
// con los datos de persona2
console.log(persona1.nombreCompleto('LIC', '44443333'));
console.log(persona1.nombreCompleto.call(persona2, 'ING', '4646544'));