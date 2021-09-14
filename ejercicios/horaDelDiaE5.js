// dependiendo la hora saludaremos
/*
6am-11am - Buenos dias
12pm-18px - Buenas tardes
19pm-24pm - Buenas Noches
0am-6am - Durmiendo
 */
let hora = 22;
let saludo;

if(hora >= 6 && hora <= 11){
    saludo = 'Buenos dias';
}
else if( hora >=12 && hora <=18){
    saludo = 'Buenas Tardes';
}
else if(hora >=19 && hora<=24){
    saludo = 'Buenas Noches'
}
else if(hora >=0 && hora < 6){
    saludo = 'Durmiendo...'
}
else{
    saludo = 'Hora del dia aquivocada'
}

console.log(saludo)
