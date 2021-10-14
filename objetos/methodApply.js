let persona1 ={
    nombre: 'Erick',
    apellido: 'Villafuerte',
    // tambien pueden recibir un argumento con call
    nombreCompleto: function (titulo, tel) {
        return titulo + ': ' +this.nombre+ ' ' +this.apellido + ', '+ tel;
    }
}

let persona2 ={
    nombre: 'manuel',
    apellido: 'Ramirez',
}

// Uso de apply para usar el metodo nombreCompleto 
// con los datos de persona2
console.log(persona1.nombreCompleto('Lic', '686868595'));
let arreglo = ['Ing', '55333222'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));