// Clase de tipo producto
class Prodcuto{
    static contadorProductos = 0;
    constructor(nombre, precio){
        this._idProducto = ++Prodcuto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }
    // methods get and set
    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }
    set precio(precio){
        this._precio = precio;
    }

    // metodo toString
    toString(){
        return `
            idProducto: ${this._idProducto}
            Nombre: ${this._nombre}
            Precio: $${this._precio} `;
    }
}

//clase tipo Orden
class Orden{
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS(){
        return 5;
    } 
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }
    // methods get and set
    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if(this._contadorProductosAgregados< Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            this._contadorProductosAgregados++;
        }
        else{
            console.log("No se puede agregar mas productos");
        }
    }
    calculaTotal(){
        let totalVenta = 0;
        for(let prodcuto of this._productos){
            totalVenta += prodcuto.precio;
        }
        return totalVenta;
    }
    mostrarOrden(){
        let productosOrden = "";
        for(let producto of this._productos){
            productosOrden += producto.toString() + "\n";
        }
        console.log(`
        Orden: ${this._idOrden} 
        Total: $${this.calculaTotal()}
        Productos: ${productosOrden}`)
    }
}

let producto1 = new Prodcuto("Pantalon", 200);
let producto2 = new Prodcuto("Camisa", 100);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Prodcuto("Short", 50);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();