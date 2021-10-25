class Persona{
    // atributo de nuestra clase
    static contadorPersonas = 0;

    // metodo estatico get para el maximo de objetos
    static get MAX_OBJ(){
        return 5;
    }

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        // verificar que no se puedan crear mas de 5 objetos
        if(Persona.contadorPersonas < Persona.MAX_OBJ){
            this.idPersona = ++Persona.contadorPersonas;
        }
        else{
            console.log('No se pueden crear mas objetos');
        }
        
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

// imprimir el maximo de personas
console.log(Persona.MAX_OBJ);
// funciona como una constante
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);

// crear dos objetos mas de tipo persona
let persona3 = new Persona('Pedro', 'Perez');
let persona4 = new Persona('Juan', 'Perez');
console.log(persona3.toString());
console.log(persona4.toString());

let persona5 = new Persona('mane', 'ramirez');
console.log(persona5.toString());
console.log(Persona.contadorPersonas);

