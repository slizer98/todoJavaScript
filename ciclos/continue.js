// uso del continue
// el numero par
for (let contador = 0; contador <= 10; contador ++){
    if ( contador % 2 !== 0){
        continue; //se va a ejecutar la siguiente iteracion
    }
    console.log(contador);
}