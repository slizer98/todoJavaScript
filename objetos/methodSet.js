let persona = {
    nombre: 'Erick',
    apellido: 'Villafuerte',
    email: 'erick@gmail.com',
    edad: 23,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.lang);
persona.lang = 'en';
console.log(persona.lang);
console.log(persona.idioma);