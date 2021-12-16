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

## Tercera parte: Crear Programa para una tienda ficticia que aplique porcentajes y descuentos:

1. Análisis y definición de las fórmulas a aplicar:
    + Recibira dos parámetros. En base al precio original y el descuento retornará el precio final con descuento aplicado:

    `( PrecioOriginal * (100 - %Descuento) ) / 100`

2. Implementar las fórmulas en Javascript con valores fijos.

3. Crear funciones que permita trabajar con diferentes parámetros.

4. Integrar Html con las funciones JS.
    1. Creación de formulario con dos etiquetas para realizar input: una por precio Original y una para indicar el descuento.

    2. Creación de un botón de tipo button para ejecutar el programa.

    3. Declaración de una etiqueta `<p id="resultado">` para generar un texto que permita devolver los datos por pantalla.

    4. En descuentos.js implemento una función que toma los inputs de precio y descuento, se almacenan en variables que serán pasadas como argumento al llamar a la función de `calcularPrecioConDescuento`.

    5. Mediante la captura del elemento de la etiqueta declarada id = "resultado" se procede a agregar su contenido para ser mostrado en pantalla mediante el método resultado.innerText = "... "  

## Cuarta parte: Se implementa un sistema de descuento por cupones (Se trabaja sobre el código del programa de descuentos)

1. Análisis y definición de las soluciones a aplicar:
    + Se contara con una lista implementada como un array de objetos donde se almacenaran los nombres de cupones y el valor a descontar que representan.

    + Luego de ingresar el precio original se ingresa el id o nombre del cupón que se desea verificar su validez.

    + La verificación se realiza mediante la lectura de los datos de cupones almacenados y la comprobación de la existencia del cupón ingresado, en caso de ser válido se procede a solicitar el objeto almacenado para pasar a procesar la operación mediante el precio original y los datos del cupón.
    
    + Se informa por pantalla el resultado de la operación, incluyendo precio final y el porcentaje de descuento que se utilizo, mediante la generación de un párrafo a través de la etiqueta mensaje.

2. Implementar las funciones en Javascript con valores constantes.

3. Encapsulamiento y creación de funciones para recibir parámetros.

    + ingresarPrecio e ingresarCuponusuario: Escuchan el input y obtienen el value mediante .getElementById("").
    
    + verificarCupon: Esta función retorna true o false mediante la comprobación de si el nombre ingresado esta almacenado en el array de cupones. Utilizo la función para recibir el nombre como parámetro y dentro de esta aplico el método .findIndex() con una función anónima que compara la propiedad nombre de cada elemento con el parámetro recibido.

    + obtenerValorDescuento: Retorna la propiedad valor del cupon almacenado en el array. Utilizo el método .find() pasando como parámetro la función validar para extraer el objeto deseado.

    + procesarDescuento: Recibe como parámetros el precio y el descuento a aplicar. Realiza la operación `( precioOriginal * (100-valorDescuento) ) / 100` retornando el precio final.
    
    + mensajeCuponAprobado y mensajeCuponRechazado: Realizan la captura de la etiqueta "mensaje" mediante `document.getElementById(" ")`, en la línea siguiente se procede a editar su contenido mediante `.innerText =`. 

4. Integración con HTML.

    + La integración con HTML se realiza a través del evento onclick sobre el botón con la leyenda procesar. Este ejecuta la función onClickButtonProcesarCupones.

## QUINTA PARTE: Herramientas estadísticas: Promedio(media aritmética), moda y mediana.  

Promedio:
`(suma de valores)/cantidad de valores sumados`
Solo en casos donde no hay valores que rompen con la regla.


Mediana: Resuelve el problema de calcular un promedio teniendo unos pocos valores que rompen la regla con valores muy ajenos a la realidad.
Depende del cálculo de números en una cantidad impar o par. Primero se ordenan de menor a mayor y después:
    caso de impar: se toma el valor que esta en medio.
    caso par: se toman los dos valores que están en la mitad y se dividen por 2.

Moda: Representan a los elementos que más se repiten en un conjunto. Pueden contarse números o elementos.

- Definir las fórmulas.
- Implementar las fórmulas en JavaScript.
- Crear funciones.

+ Calcular el promedio: Se procede de dos maneras:
    + La primera es mediante un bucle for donde itera la lista y suma cada elemento a una variable como acumulador.
    + La segunda es mediante el método reduce el cuál retorna un valor, en este caso la acumulación de la suma de los elementos en la lista. El método recibe una función como parámetro, esta a su vez recibe un valor inicializado en 0 como acumulador y un indicador del elemento a iterar en la lista para ser sumado al acumulador.

+ Calcular la mediana de una lista:
    + En este caso se plantea el cálculo para dos listas: una con longitud par y el caso de una lista de longitud impar.

    + arrayEsPar: Mediante la operación de comparar a través del resto obtenido de su división por 2 define a que categoría pertenece.

    + arrayNoEstaVacio: Evita que ingrese una lista vacía.

    + ordenarArray: Utiliza el método .sort() recibiendo una función de comparación para definir como realizar el orden de los elementos.

Para el cálculo de la posición media se utiliza la operación de dividir la cantidad de elementos en la lista por dos y parsear el resultado a entero para obtener una posición de valor entero.
En el caso de las listas con cantidad de elementos pares, se accede al elemento de la posición media y la posición anterior.