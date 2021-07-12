// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array = [];
  for (const key in objeto) {
    const element = objeto[key];
    array.push([key, element]);
  }
  return array;
}



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let characterCount = {};
  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    if (characterCount[element] === undefined) characterCount[element] = 1;
    else characterCount[element] += 1;
  }
  return characterCount;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let lowerCaseString = '';
  let upperCaseString = '';
  for (let i = 0; i < s.length; i++) {
    const element = s[i];
    element < 'a' ? upperCaseString += element : lowerCaseString += element;
  };
  const newString = upperCaseString.concat(lowerCaseString);
  return newString;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  const wordArray = str.split(' ');
  const arrayOfCharArrays = wordArray.map(x => x.split(''));
  const reversedWordArray = arrayOfCharArrays.map(x => x.reverse().join(''));
  const reversedString = reversedWordArray.join(' ');
  return reversedString;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  const str = numero.toString();
  const middleIndex = Math.floor(str.length / 2);
  let esCapicua = true;
  
  for (let i = 0, j = str.length-1; i < middleIndex; i++, j--) {
    str[j] === str[i] ? esCapicua : esCapicua = false;    
  };
  
  // const numeroArray = Array.from(str);
  // esCapicua = numeroArray.reduce((acc, n, i, a) => {
  //   acc = acc && n === a[a.length -1 -i];
  //   return acc;
  // }, true);

  return esCapicua ? 'Es capicua' : 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let charArray = cadena.split('');
  const filteredString = charArray.filter(x => x !== 'a' && x !== 'b' && x !== 'c').join('');
  return filteredString;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort((a, b) => a.length - b.length);
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let interseccion = [];
  for (let i = 0; i < arreglo1.length; i++) {
    const element = arreglo1[i];
    for (let j = 0; j < arreglo2.length; j++) {
      if (element === arreglo2[j]) interseccion.push(element);
    }
  }
  return interseccion;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

