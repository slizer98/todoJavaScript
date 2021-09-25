
// etiquetas en javaScript
// (no se recomienda su uso)
inicio:
for (let contador = 0; contador <= 10; contador ++){
    if ( contador % 2 !== 0){
        continue inicio; //aqui ponemos a donde ira el continue con la etiqueta
    }
    console.log(contador);
}
