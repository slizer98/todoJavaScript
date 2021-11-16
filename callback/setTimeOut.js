// Llamadas asincronas con setTimeOut
let miFuncionCallback = () => {
    console.log('Saludo Asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallback, 3000);

let sinAsincronia = () => {
    console.log('Saludos inmediatos');
}
sinAsincronia();

setTimeout(() => {
    console.log('Saludo Asincrono despues de 4 segundos');
}, 4000);