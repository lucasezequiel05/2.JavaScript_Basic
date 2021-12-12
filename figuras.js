// CÓDIGO DEL CUADRADO

// console.group("CUADRADO");
// const ladoCuadrado = 5;

// // Perímetro Cuadrado
// const perimetroCuadrado = ladoCuadrado*4;

// // Área Cuadrado
// const areaCuadrado = ladoCuadrado*ladoCuadrado;
 
// console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}`);
// console.log(`El área del cuadrado es: ${areaCuadrado}`);
// console.groupEnd();

// function calcularPerimetroCuadrado(lado){    
//     var perimetroCuadrado = lado*4;
//     return console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}`);
// }

// function calcularAreaCuadrado(lado){
//     var areaCuadrado = lado**2;
//     console.log(`El área del cuadrado es: ${areaCuadrado}`);
// }

// CÓDIGO DEL TRIÁNGULO

// console.group("TRIÁNGULO");
// const ladoTriangulo1 = 5;
// const ladoTriangulo2 = 5;
// const alturaTriangulo = 4.5;
// const baseTriangulo = 7;

// // Perímetro Triángulo
// const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;

// // Área Triángulo
// const areaTriangulo = (alturaTriangulo*baseTriangulo)/2;

// console.log(`El perímetro del triángulo es: ${perimetroTriangulo}`);
// console.log(`El área del triángulo es: ${areaTriangulo} `);
// console.groupEnd();

// function calcularPerimetroTriangulo(lado1, lado2, base){
//     var perimetroTriangulo = lado1 + lado2 + base;
//     return console.log(`El perímetro del triángulo es: ${perimetroTriangulo}`);
// }

// function calcularAreaTriangulo(alturaTriangulo, baseTriangulo){
//     var areaTriangulo = (alturaTriangulo*baseTriangulo)/2;
//     return console.log(`El área del triángulo es: ${areaTriangulo} `);
// }

// CÓDIGO DE CIRCUNFERENCIA

// console.group("CIRCUNFERENCIA");
// const radioCirculo = 5;

// // PI
// const PI= Math.PI;

// // Diámetro Círculo
// const diametroCirculo = radioCirculo*2;

// // Perímetro Círculo
// const perimetroCirculo = (radioCirculo*2)*PI;

// // Área Círculo
// const areaCirculo = (radioCirculo**2)*PI;

// console.log(`El perímetro de la circunferencia es: ${perimetroCirculo}`);
// console.log(`El área de la circunferencia es: ${areaCirculo}`);
// console.groupEnd();

// function calcularPerimetroCircunferencia(radio){
//     var diametroCircunferencia = radio*2;
//     var perimetroCircunferencia = diametroCircunferencia*PI;
//     return console.log(`El perímetro de la circunferencia es: ${perimetroCircunferencia}`);
// }

// function calcularAreaCircunferencia(radio){
//     var areaCircunferencia = (radio**2)*PI;
//     return console.log(`El área de la circunferencia es: ${areaCircunferencia}`);
// }

// INTEGRANDO HTML CON JAVASCRIPT

function calcularPerimetroCuadrado(){    
    
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;

    var perimetroCuadrado = lado*4;
    alert(`El perímetro del cuadrado es: ${perimetroCuadrado}`);
}

function calcularAreaCuadrado(){
    
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    
    var areaCuadrado = lado**2;
    alert(`El área del cuadrado es: ${areaCuadrado}`);
}

function calcularPerimetroTriangulo(){
    
    var input = document.getElementById("inputTrianguloLado");
    const ladoTriangulo = input.value;
    
    input = document.getElementById("inputTrianguloBase");
    const baseTriangulo = input.value;

    var perimetroTriangulo = (Number(ladoTriangulo)*2) + Number(baseTriangulo);
    alert(`El perímetro del triángulo es: ${perimetroTriangulo}`);
}

function calcularAreaTriangulo(){
    
    var input = document.getElementById("inputTrianguloAltura");
    const alturaTriangulo = input.value;
    
    input = document.getElementById("inputTrianguloBase");
    const baseTriangulo = input.value;

    var areaTriangulo = (alturaTriangulo*baseTriangulo)/2;
    alert(`El área del triángulo es: ${areaTriangulo} `);
}

function calcularPerimetroCircunferencia(){
    
    const input = document.getElementById("inputCircunferencia");
    const radioCircunferencia = input.value;

    const PI= Math.PI;

    var diametroCircunferencia = radioCircunferencia*2;
    var perimetroCircunferencia = diametroCircunferencia*PI;
    alert(`El perímetro de la circunferencia es: ${perimetroCircunferencia}`);
}

function calcularAreaCircunferencia(){

    const input = document.getElementById("inputCircunferencia");
    const radioCircunferencia = input.value;

    const PI= Math.PI;

    var areaCircunferencia = (radioCircunferencia**2)*PI;
    alert(`El área de la circunferencia es: ${areaCircunferencia}`);
}
