// Desarrollo de fórmula
const descuento = 15;
const precioOriginal = 10000;

const precioFinal = ( precioOriginal * (100-descuento) ) / 100;
console.log(`El precio final con la aplicación del descuento del %${descuento} es = $${precioFinal}.`);

console.log({
    precioOriginal,
    descuento,
    precioFinal
})

// Encapsulamiento de la fórmula y Desarrollo de función 
function calcularPrecioConDescuento (precioOriginal, descuento){
    const precioFinal = ( precioOriginal * (100-descuento) ) / 100;
    return precioFinal;
}

// Vinculando html con javascrip
function onClickButtonCalcularPrecioFinal(){
    var input = document.getElementById("inputPrecio");
    const precioOriginal = Number(input.value);

    var input = document.getElementById("inputDescuento");
    const descuento = Number(input.value);

    const precioFinal = calcularPrecioConDescuento(precioOriginal, descuento);

    //Ver resultado de la operación por pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerText = `El precio final con la aplicación del descuento del %${descuento} es = $${precioFinal}.`;
}