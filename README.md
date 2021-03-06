# proyecto con JavaScript Básico

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

## SEXTA PARTE: Calcular la moda de una serie de elementos:

+ Solicitud de datos: mediante el input se solicita el ingreso de una cadena de texto con valores separados por ",", los cuales se convertiran mediante el uso de split() a un arreglo que se pasará como argumento de la función calcularModa().

+ Primero: declaro el arreglo de elementos a recorrer y un diccionario como lista de objetos clave:valor vacía para contadores.  
El elemento será la llave de acceso a su contador, y este último se modifica sólo llamando al índice correspondiente.

+ Segundo: recorro el array con .map( function(elemento){})

+ Tercero: Hay dos casos: 1) Que el elemento no exista en el diccionario y se debe crear su contador. 
2) Ya existe y hay que modificar el contador en +1.

Condición: Cuando llamo por índice a un elemento del diccionario y este no existe retorna undefined, lo que como dato booleano equivale a false.

Para realizar la operación:
+ Cuarto: Convierto el diccionario en un array mediante Object.entries(). A su vez ordeno el nuevo arreglo mediante
sort() pasando una funciòn de comparación que compare los contadores de cada elemento almacenado.

+ Quinto: Una vez obtenido el valor de moda mediante la última posición del arreglo, paso a buscar el resto de elementos que compartan el mismo número de repeticiones.
Declaro una variable de texto para concatenar los valores encontrados. Vuelvo a iterar con .map().
Al final envío la variable de texto a la etiqueta correspondiente.

## SÉPTIMA PARTE: Promedio Ponderado (trabajando con un array de oobjetos)

La suma de los elementos multiplicados cada uno por un peso o valor propio, dividido por la suma de los pesos.

Mediante la declaración de un array de objetos se determina cada elemento con: nombre de asignatura, nota y crédito propio.

Combinando la secuencia de map(element) y reduce (sum=0,nextvalue):
+ Primero se declaran nuevos arreglos que almacenan el resultado de la multiplicación entre las notas y sus créditos y por otro lado, los créditos. 
+ Segundo se obtiene el valor acumulado de todos los elementos almacenados en ambos array. 
Por último se realiza la división de la sumatoria de notas con créditos dividido la sumatoria de los créditos.

