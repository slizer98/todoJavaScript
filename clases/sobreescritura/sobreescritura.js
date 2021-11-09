class Empleado{
    constructor(nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;

    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    obtenerDetalles(){
        return `Empleado: ${this.nombre}, sueldo: $${this.sueldo}`;
    }

}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this.departamento = departamento;
    }
    // Sobreescritura de metodos
    obtenerDetalles(){
        return `${super.obtenerDetalles()}, Dpto: ${this.departamento}`;
    }
}

// Polimorfismo
function imprimir(tipo){
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente){
        console.log('Es un objeto de tipo Gerente');
    }
    else if (tipo instanceof Empleado){
        console.log('Es un objeto de tipo Empleado');
    }
}

let empleado1 = new Empleado('Juan', 1000);
let gerente1 = new Gerente('Erick', 1000000, 'Sistemas');

imprimir(empleado1);
imprimir(gerente1);