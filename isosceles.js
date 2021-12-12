// DESARROLLO PARA TRIÁNGULO ISÓSCELES

function ejecutar(){

    //Recepción de parámetros ocurre en html
    var input = document.getElementById("inputParametro1");
    const parametro1 = Number(input.value);

    input = document.getElementById("inputParametro2");
    const parametro2 = Number(input.value);

    input = document.getElementById("inputParametro3");
    const parametro3 = Number(input.value);

    //Validación
    var esIsosceles = false;
    var base;
    var lado;

    if (parametro1 === parametro2 && parametro1 !== parametro3) {
        esIsosceles = true;
        base = parametro3;
        lado = parametro1;
        
    } else if (parametro1 === parametro3 && parametro1 !== parametro2){
        esIsosceles = true;
        base = parametro2;
        lado = parametro1;

    } else if (parametro2 === parametro3 && parametro2 !== parametro1){
        esIsosceles = true;
        base = parametro1;
        lado = parametro2;
    }

    if (esIsosceles) {

        const altura = Math.sqrt((lado**2)-((base/2)**2));
        alert(`La altura es ${altura}`);

    } else {
        alert("Las medidas ingresadas no corresponden a un triángulo isósceles");
    }
}
