// Código del cuadrado

console.group("CUADRADO");
const ladoCuadrado = 5;

// Perímetro Cuadrado
const perimetroCuadrado = ladoCuadrado*4;

// Área Cuadrado
const areaCuadrado = ladoCuadrado*ladoCuadrado;

console.log(`El perímetro del cuadrado es: ${perimetroCuadrado}`);
console.log(`El área del cuadrado es: ${areaCuadrado}`);
console.groupEnd();

// Código del triángulo

console.group("TRIÁNGULO");
const ladoTriangulo1 = 5;
const ladoTriangulo2 = 5;
const alturaTriangulo = 4.5;
const baseTriangulo = 7;

// Perímetro Triángulo
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;

// Área Triángulo
const areaTriangulo = (alturaTriangulo*baseTriangulo)/2;

console.log(`El perímetro del triángulo es: ${perimetroTriangulo}`);
console.log(`El área del triángulo es: ${areaTriangulo} `);
console.groupEnd();

// Código de la circunferencia

console.group("CIRCUNFERENCIA");
const radioCirculo = 5;

// PI
const PI= Math.PI;

// Diámetro Círculo
const diametroCirculo = radioCirculo*2;

// Perímetro Círculo
const perimetroCirculo = (radioCirculo*2)*PI;

// Área Círculo
const areaCirculo = (radioCirculo^2)*PI;

console.log(`El perímetro de la circunferencia es: ${perimetroCirculo}`);
console.log(`El área de la circunferencia es: ${areaCirculo}`);
console.groupEnd();
