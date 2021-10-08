// Paso por referencia

// Objeto
const persona = {
    nombre: 'Erick',
    apellido: 'Villafuerte',
    edad: 25,
    
};

function cambiarValorObjeto(p1){
    p1.nombre = 'Manuel';
    p1.apellido = 'Ramirez';
    p1.edad = 23;
}

cambiarValorObjeto(persona);
console.log(persona)

