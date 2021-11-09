// Clase dispositivoEntrada
class DispositivoEntrada {
    constructor(tipoEntradad, marca){
        this._tipoEntradad = tipoEntradad;
        this._marca = marca;
    }
    get tipoEntradad(){
        return this._tipoEntradad;
    }
    set tipoEntradad(tipoEntradad){
        this._tipoEntradad = tipoEntradad;
    }

    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}



// Clase hija Raton
class Raton extends DispositivoEntrada {
    static contadorRaton = 0;
    constructor(tipoEntradad, marca){
        super(tipoEntradad, marca);
        this._idRaton = ++Raton.contadorRaton;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: idRaton: ${this._idRaton}, tipoEntrada: ${this._tipoEntradad}, Marca: ${this._marca}`;
    }
}

// clase hija Teclado
class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;
    constructor(tipoEntradad, marca){
        super(tipoEntradad, marca);
        this._idTeclado = ++Teclado.contadorTeclado;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: idTeclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntradad}, Marca: ${this._marca}`;
    }
}

// Clase Monitor
class Monitor {
    static contadorMonitor = 0;
    constructor(marca, tamaño){
        this._idMonitor = ++Monitor.contadorMonitor;
        this._marca = marca;
        this._tamaño = tamaño;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
    get tamaño(){
        return this._tamaño;
    }
    set tamaño(tamaño){
        this._tamaño = tamaño;
    }
    toString(){
        return `Monitor: idMonitor: ${this._idMonitor}, marca: ${this._marca}, tamaño: ${this._tamaño}`;
    }
}

// Clase computadora
class Computadora {
    static contadorComputadora = 0;
    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadora;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre}
        ${this._monitor} 
        ${this._raton} 
        ${this._teclado}`;
    }
}


// clase Orden
class Orden {
    static contadorOrden = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = [];
    }
    
    get idOrden(){
        return this._idOrden;
    }
    // agregar computadora
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden+= `\n${computadora}`;
        }
        console.log(`Orden: ${this._idOrden}, computadoras: ${computadorasOrden}`);
    }
}
    let raton1 = new Raton("USB", "HP");
    console.log(raton1.toString());
    let raton2 = new Raton("USB", "HP");
    console.log(raton2.toString());
    
    let teclado1 = new Teclado("USB", "Logitech");
    console.log(teclado1.toString());
    let teclado2 = new Teclado("blootu", "SAMNGUNG");
    console.log(teclado2.toString());
    
    let monitor1 = new Monitor("LG", 15);
    console.log(monitor1.toString());
    let monitor2 = new Monitor("HP", 22);
    console.log(monitor2.toString());
    
    
    let computadora1 = new Computadora("HP", monitor1, raton1, teclado1);
    console.log(computadora1.toString());
    let computadora2 = new Computadora("LG", monitor2, raton2, teclado2);
    console.log(`${computadora2}`);

    let orden1 = new Orden();
    orden1.agregarComputadora(computadora1);
    orden1.agregarComputadora(computadora2);
    orden1.agregarComputadora(computadora1);
    orden1.mostrarOrden();

    let orden2 = new Orden();
    orden2.agregarComputadora(computadora2);
    orden2.agregarComputadora(computadora1);
    orden2.agregarComputadora(computadora2);
    orden2.mostrarOrden();