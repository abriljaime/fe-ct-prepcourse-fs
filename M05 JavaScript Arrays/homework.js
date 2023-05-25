/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:

   /*otro*/
   /*return array.pop(); quita el ultimo elemento y devuelve su valor */ 

   return array[array.length -1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   /*var nuevoArray = array.map((elemento)=>{
      return elemento + 1;
   });
   return nuevoArray;  ------utilizando map------*/

   for (let i=0; i<=array.length -1; i++){
      array[i]=array[i]+1;
   }
   return (array)
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   let frace = palabras.join(' ');
   return frace;


   /*let cadena = '';
   for (let i=0; i<=palabras.length-1; i++){
     if (i != palabras.length-1 ){
      cadena = cadena + palabras[i]+' ';
     }else{
      cadena = cadena + palabras[i];
      }
     
   }
   return cadena  */


}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar True si está, o False si no está.
   // Tu código:

   if (array.includes(elemento)){
      return true
   }else return false

   /* let en = array.find(elemArreglo => elemArreglo === elemento)
   if (en){
      return true;
   }else{
      return false;
   }   --------utilizando find--------*/

   /* for (let i=0; i<=array.length-1; i++){
      if (array[i] == elemento){
          return true;
      }
         
   }
   return false;  */
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   /*valorInicial o actual*/

   let suma = arrayOfNums.reduce((acumulador, valorInicial)=>{
      return acumulador = acumulador + valorInicial
   });
   return suma
   /*
   let suma = 0;
   for (let i=0; i<=arrayOfNums.length -1; i++ ){
      suma = suma + arrayOfNums[i];
   }
   return suma;   */
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   
   let promedio = resultadosTest.reduce((acumulador, valorInicial)=>{
     return acumulador = acumulador + valorInicial;
      
   });
   return promedio/resultadosTest.length
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let masGrande = arrayOfNums.reduce((acumulador, valorInicial)=>{
      return Math.max(acumulador,valorInicial)
   });
   return masGrande
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
   let cont =1;
   if (arguments.length == 0) return 0;
   else if (arguments.length == 1) return arguments[0];
   else{
      for (let i=0; i<=arguments.length-1;i++){
         cont = cont * arguments[i];
      }
      return cont
   }
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código: --------ojo se puede con filter jjjj------
   let cont = 0;
   for (i=0; i<=array.length-1;i++){
      if (array[i] >18){
         cont++;
      }
      
   }
   return cont;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   switch (numeroDeDia) {
      case 1:
        return ("Es fin de semana");
        break;
      case 2:
         return ("Es dia laboral");
        break;
      case 3:
         return ("Es dia laboral")
         break;
      case 4:
         return ("Es dia laboral")
         break;
      case 5:
         return ("Es dia laboral")
         break;
      case 6:
         return ("Es dia laboral")
         break;
      case 7:
         return ("Es fin de semana")
         break;               
      default:
         return ("Valor errado")
        
  }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar True si el entero inicia con 9 y False en otro caso.
   // Tu código:
   let cadena = num.toString()
   if (cadena[0] == 9){
      return true
   }else{
      return false
   }

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar True.
   // Caso contrario retornar False.
   // Tu código:
   let comparar = array[0];
   
   for (let i=1; i<=array.length-1; i++){
     if (array[i] != comparar) return false
     }
     return true
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   let arrayAux =[];
   for(let i in array){
     console.log(i,' ',array[i])
      if (array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre" ){
         arrayAux.push(array[i])
      }
   }
   if(arrayAux.length != 3)return "No se encontraron los meses pedidos";
   else return arrayAux
}


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let array = []
  let cont=6
  for (let i=0; i<=10; i++){
    let res = cont*i
    array.push(res)
  }
  return array     
}


function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   let arrayAux = [];
   for (let i=0; i<= array.length-1;i++){
      if(array[i] > 100){
         arrayAux.push(array[i])
      } 
   }
   return arrayAux
}


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   let newArray = []
   for (let i=1; i<11; i++){
     num = num + 2;
     if (num != i){
     newArray.push(num)
     }else{
       return 'Se interrumpió la ejecución'
       } 
   }
      return newArray
   
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   let newArray = []
   for (let i=1; i<10; i++){
     num = num + 2;
     if (i != 5 && num != 5){
     newArray.push(num)
     }else{
       if ((i == 5 && num == 5)){
         continue;
       }else{
       newArray.push(num);
       }
     }
   }
      return newArray
   

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
