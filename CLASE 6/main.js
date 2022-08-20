/*function saludar(nombre, apellido) {
    alert('Hola ' + nombre + " " + apellido);
}

saludar("Joaquin", "Gallardo");
saludar("Florencia", "Valdez");
saludar("Rocio", "Guerrero");
saludar("Manuel", "Mendoza");*/

function sumar(numero1, numero2) {
    return numero1 + numero2;
}

let resultado = sumar(40,4);
console.log("40 + 2 = " + resultado);
console.log("40 + 2 = " + sumar(40,4));
let nombre = ["Joaquin", "Gallardo"];
console.log(nombre[0].length);

fetch("https://hp-api.herokuapp.com/api/characters")
.then(response => response.json())
.then(json => console.log(json))

//https://github.com/public-apis/public-apis
//https://www.ipify.org/
//http://ip-api.com/
