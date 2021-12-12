# proyecto2_JavaScript Básico

## Pasos del proyecto:

### Preparar el entorno de trabajo:
+ Se crea un nuevo repositorio en GitHub con archivo Readme, licencia de MIT.  
+ En el sistema se establece la carpeta que alojará el repositorio local, se ejecuta git clone.
+ Se crea el archivo girignore con touch .gitignore .

## Primera parte: Creación de una página para calcular perímetro y área de figuras geométricas:
Creación de archivos: figuras.html y figuras.js.

1. Análisis de las figuras a calcular y sus fórmulas:
    + Perímetro del cuadrado: L * 4
    + Área del cuadrado: L * L
    + Perímetro del triángulo: L + L + Base
    + Área del triángulo: ( Base * Altura )/2
    + Perímetro de circunferencia: diámetro * Pi
    + Área de circunferencia: (radio^2) * Pi
2. Implementación de las fórmulas en JavaScript para realizar los cálculos, utilizando valores constantes.
3. Creación de las funciones encapsulando las fórmulas implementadas, utilizando valores dinámicos y recibiendolos como parámetros. 
Se enviarán los valores por consola como argumento.
4. Integrar Javascript con Html.
    + Crear un formulario, con sus etiquetas e inputs identificados por id individuales. Declaración de los botones y las funciones que ejecutan.
    + Crear funciones que capturan los datos ingresados por las acciones de los usuarios para responder con un mensaje por pantalla.

## Segunda parte: Crear una función que calcule la altura de isósceles:
Creo los archivos isosceles.html e isosceles.js.

1. Establezco 3 etiquetas e inputs distintos para el ingreso de los valores que representan las medidas del triángulo.

2. Con JS realizo la captura de los datos ingresados por el usuario en tres variables distintas.

3. Declaro dos variables para posteriormente asignar y diferenciar los catetos largos de la base

4. Realizo la validación en la que dos lados son iguales y distintos al tercero. Utilizo un valor booleano para indicar si la validación fue correcta o incorrecta, por defecto será false.
    + Al identificar el caso asigno el cateto más corto a la variable base y los iguales a la variable lado.

5. Si la validación fue correcta realizo el cálculo de la altura mediante `Math.sqrt((lado**2)-((base/2)**2)` y muestro el resultado por pantalla.