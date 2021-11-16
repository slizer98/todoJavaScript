let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if(expresion){
        resolved('resolvio correcto')
    }
    else{
        rejected('Se produjo un error');
    }
});

// miPromesa.then(
//     value => console.log(value),
//     error => console.log(error)
// );
miPromesa
    .then(value => console.log(value))
    .catch(error => console.log(error))