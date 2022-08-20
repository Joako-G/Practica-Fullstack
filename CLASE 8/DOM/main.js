/* 4 - OBTENER DATOS DE FORMULARIO */
// Asignar valores a los inputs

//document.getElementById("nombre").value = "Harry";
//document.getElementById("edad").value  = 13;

// Capturar valores de los inputs
const getValueInput = () => {
    let inputValue1 = document.querySelector("#name").value;
    let inputValue2 = document.querySelector("#surname").value;      

    console.log(inputValue1);
    console.log(inputValue2);
};
