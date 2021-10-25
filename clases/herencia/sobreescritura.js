class Persona{
    // atributo de nuestra clase
    static contadorObjetosPersona = 0;

    // Atributos de nuestros objetos
    email = 'Valor default email';

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log(`se incrementa conadot: ${Persona.contadorObjetosPersona}`)
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
         return this.nombreCompleto();
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

let empleado1 = new Empleado('Manuel', 'Ramirez', 'Sistemas' );
console.log(empleado1)
console.log(empleado1.nombreCompleto())
console.log(empleado1.toString())

// persona1.saludar(); No  es posible llamar un metodo static desde un Objeto
Persona.saludar();
Persona.saludar2(persona1);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);



