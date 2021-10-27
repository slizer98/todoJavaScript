
// clase hija Cliente
class Cliente extends Persona {

    static contadorClientes = 0;

    constructor(nombre,apellido, edad, fechaRegistro) {
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