/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   let temp = [];
   let arrFinal = [];
   for (let i in objeto){
     temp.push(i);
     temp.push(objeto[i])
     arrFinal.push(temp)
     temp = []     
     }
     
     return arrFinal
}


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let obj = {}
   for (let i=0; i<string.length; i++){
     let letra = string[i]     
     if (obj.hasOwnProperty(letra)){
       obj[letra] = obj[letra]+1
     }else{
        obj[letra] = 1 
        
     }     
    }
    return obj   
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let arrMay = []
   let arrMin = []
   for (let i=0; i<string.length; i++){
     if (string[i] == string[i].toUpperCase()){
       arrMay.push(string[i])
     }else{
       arrMin.push(string[i])
     }
     
    }
    let arrFinal = arrMay.concat(arrMin)
    return arrFinal.join('')
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let separa = frase.split(' ')
   
   let  arr2=[]
   
   for (let i = 0; i < separa.length ; i++){
     let reves = separa[i]
     let arrStr = reves.split("")
     let rev2 = arrStr.reverse().join("")
     arr2.push(rev2)
          
     }
     return arr2.join(' ')
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let aString = numero.toString();
   let separado = aString.split('');
   let arr2 = []
   for (let i=separado.length-1; i>=0; i--){
     arr2.push(separado[i])
   }
   let numero2 = arr2.join('')
   if (aString != numero2){
     return "No es capicua" 
     }else{
     return "Es capicua"   
     }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let arreglo2 = [];
   let arreglo = string.split('')
   for (let i=0; i < arreglo.length; i++){
     if (arreglo[i]=='a' || arreglo[i]=='b' || arreglo[i]=='c' ){
       continue;       
     }else{
       arreglo2.push(arreglo[i])
     }
   }
   return arreglo2.join('')   
}
   
function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   let cont = 0
   while (cont <= arrayOfStrings.length-1){
   for (let i=0; i<arrayOfStrings.length-1; i++){
      if (arrayOfStrings[i+1].length < arrayOfStrings[i].length){
        let temp = arrayOfStrings[i]
        arrayOfStrings[i] = arrayOfStrings[i+1];
        arrayOfStrings[i+1] = temp;
        
         }
   }
   cont = cont+1      
   }
   return arrayOfStrings
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let array3 = []
   for (let i=0; i<array2.length; i++){
     for (let j=0; j<array1.length; j++){
       console.log(array2[i],array1[j])
       if (array2[i] == array1[j]){
         array3.push(array1[j]);
         }
      }
       
   }
   return array3
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
