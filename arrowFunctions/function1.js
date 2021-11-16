function miFunction(){
    console.log("Hola mundo");
}
miFunction();

// Arrow function
const miFunctionFlecha = () => {
    console.log("Hola mundo flecha");
}
miFunctionFlecha(); 

const miFunctionFlecha2 = nombre => console.log(`Hola ${nombre}`);
miFunctionFlecha2("Erick");

const saludar = () =>{
    return "Hola mundo desde la funcion";
}
console.log(saludar());

const saludar2 = () => "Hola mundo desde la funcion";
console.log(saludar2());

const regresaObjeto = () => ({nombre: "Erick", apellido: "Villafuerte"});
console.log(regresaObjeto());

const sumarNumeros = (num1, num2) => num1 + num2;
console.log(sumarNumeros(1,2));