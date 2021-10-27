// Clase hija Empleado
class Empleado extends Persona {

    static contadorEmpleados = 0;

    // herencia de la clase persona
    constructor(nombre, apellido, edad, salario) {
        super(nombre, apellido, edad);
        this._salario = salario;
        this._idEmpleado = ++ Empleado.contadorEmpleados;
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