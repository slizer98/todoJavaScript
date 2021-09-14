// AND '&&'
let a = 5;
let valMin = 0, valMax = 10;
if (a >= valMin && a <= valMax){
    console.log('Dentro de rango');
}else{
    console.log('Fuera de rango');
}

//OR '||' 
let vacaciones = true, diaDescanso = false;
if(vacaciones || diaDescanso){
    console.log('El padre puede asistir al juego')
}else{
    console.log('El padre esta ocupado')
}