let numero = 5;

let numeroTexto = 'Valor desconocido';
switch(numero){
    case 1:
        numeroTexto = 'UNO';
        break;
    case 2:
        numeroTexto = 'DOS';
        break;
    case 3:
        numeroTexto = 'TRES';
        break;
    case 4:
        numeroTexto = 'CUATRO';
        break;
    default:
        numeroTexto = 'Este numero no lo tenemos'
}
console.log(numeroTexto);