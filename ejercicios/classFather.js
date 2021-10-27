// creamos la clase persona
class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    // Metodos get y set
    get idPersona(){
        return this._idPersona;
    }

    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {        
        this._apellido = apellido;
    }
    
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad;
    }

    // Metodo toString
    toString() {
        return `${this._idPersona}: ${this._nombre} ${this._apellido} - ${this._edad} años`;
    }
}

// Clase hija Empleado
class Empleado extends Persona {

    static contadorEmpleados = 0;
    
    // herencia de la clase persona
    constructor(nombre, apellido, edad, salario) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++ Empleado.contadorEmpleados;
        this._salario = salario;
    }
    // Metodos get y set
    get idEmpleado() {
        return this._idEmpleado;
    }
    get salario() {
        return this._salario;
    }
    set salario(salario) {
        this._salario = salario;
    }
    toString() {
        return `${super.toString()} ${this._idEmpleado} - $${this._salario}`;
    }

}

// clase hija Cliente
class Cliente extends Persona {

    static contadorClientes = 0;
    
    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._idCliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    // Metodos get y set
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }  
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }
    toString() {
        return `${super.toString()} ${this._idCliente}  ${this._fechaRegistro}`;
    }
}

// creamos un objeto de la clase persona
let persona1 = new Persona("Juan", "Perez", 30);
let persona2 = new Persona("Pedro", "Gomez", 40);
console.log(persona1.toString());
console.log(persona2.toString());

// creamos un objeto de la clase empleado
let empleado1 = new Empleado("Juan", "Perez", 30, 1000);
let empleado2 = new Empleado("Pedro", "Gomez", 40, 2000);
console.log(empleado1.toString());
console.log(empleado2.toString());

// creamos un objeto de la clase cliente
let cliente1 = new Cliente("Erick", "Villafuerte", 23, new Date());
let cliente2 = new Cliente("Manuel", "Ramirez", 23, new Date());
console.log(cliente1.toString());
console.log(cliente2.toString());
