let saludo = nombre => "Hola " + nombre;
console.log(saludo("Matias"));

let fecha = new Date();
let hora = fecha.getHours();

let saludo3 = (hr) => {
    if ( hr <= 12 ) {
        return "Buenos dias";
    } else if ( hr >12 && hr <20 ) {
        return "Buenas tardes"
    } else {
        return "Buenas noches"
    }
}

console.log(saludo3(hora));