const lista1= [
    100,
    200,
    300,
    400,
];

let sumaLista1 = 0;

// Suma de los elementos con bucle for()
for (let i=0; i < lista1.length; i++){
    sumaLista1 = sumaLista1 + lista1[i];
}

const promedioLista1 = sumaLista1 / lista1.length;

function calcularPromedioArray(lista1){
// Suma de los elementos con reduce
    let suma = lista1.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    )

// Promedio
    const promedio = suma/lista1.length;
    return promedio;
}
