class Persona{
    // atributo de nuestra clase
    static contadorPersonas = 0;

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
     // Metodo
     nombreCompleto(){
         return this._nombre + ' ' + this._apellido;
     }
    //  Sobreescribiendo el metodo de la clase Padre (Object)
     toString(){
        //  se aplica Polimorfismo(Multiples formas en tiempo de ejecucion)
        // el metodo que se ejecuta depende si es una referencia de tipo padre
        // o de tipo hijo 
         return this.idPersona +' ' + this.nombreCompleto();
     }
     static saludar(){
         console.log('Saludos desde el metodo static');
     }
     static saludar2(persona){
        console.log(persona.nombre);
     }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento
    }
    // Sobreescritura 
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

// Creando objetos de tipo persona
let persona1 = new Persona('Erick', 'Villafuerte');
console.log(persona1.toString())

// crear objetos de tipo empleado
let empleado1 = new Empleado('Erick', 'Villafuerte', 'Sistemas');
console.log(empleado1.toString());

// imprimir el contador de personas
console.log(Persona.contadorPersonas);

// crear una nueva persona
let persona2 = new Persona('Juan', 'Perez');
console.log(persona2.toString());

// imprimir el contador de personas
console.log(Persona.contadorPersonas);