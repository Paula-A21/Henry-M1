"use strict";
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  if (array.length <= 1) return array;

  let pivot = array[Math.floor(Math.random() * array.length)];;
  let right = [];
  let left = [];
  let equal = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else if (array[i] > pivot) {
      right.push(array[i]);
    } else {
      equal.push(array[i]);
    }
  }

  return quickSort(left).concat(equal).concat(quickSort(right));
}



function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //okey probemos ahora

  //  array.lenght === 1 return  array
  //divido  con mi funcion dividir()
  // izq = [0] -> [2,3,4]
  // der = [1] > [2]
  // merge(mergeSort(izq),mergeSort(der))

  if (array.length === 1) return array;

  let div = dividir(array);
  let izq = div[0];
  let der = div[1];

  //            [3,2]                     [7,4,5,6]
  return merge(mergeSort(izq), mergeSort(der));
}

function dividir(array) {
  //let medio = mathflo0r / 2
  // izq = slice [0, medio]
  // der = slice[medio , ultimo]
  //[izq , der]

  //[7,3,4,5,2,6]

  let medio = Math.floor(array.length / 2);
  let izq = array.slice(0, medio);
  let der = array.slice(medio);

  return [izq, der]; //[[3,2],[7,4,5,6]]
}

function merge(izq, der) {
  // mientras el lado izq y el lado derecho tengan elementos
  // izq< der  push(izq)
  // der < izq  push (der)
  // return [izq] + [der]

  let indiceIzq = 0;
  let indiceDer = 0;
  let array = [];

  //
  //                 ^                      ^
  // resultado [3,2,7,4,5,6]

  while (indiceIzq < izq.length && indiceDer < der.length) {
    if (izq[indiceIzq] < der[indiceDer]) {
      array.push(izq[indiceIzq]);
      indiceIzq++;
    } else {
      array.push(der[indiceDer]);
      indiceDer++;
    }
  }

  return array.concat(izq.slice(indiceIzq)).concat(der.slice(indiceDer));
}

//   if(array.length === 1){
//     return array;
//   }

//   let mitad = Math.floor(array.length / 2);
//   let izq = array.slice(0, mitad);
//   let der = array.slice(mitad);

//   array = [];

//   izq = mergeSort(izq);
//   der = mergeSort(der);

//   while(izq.length && der.length){
//     let elimIzq = izq.shift();
//     let elimDer = der.shift();
//     if(izq[0] <= der[0]){
//       array.push(elimIzq);
//     }
//     else{
//       array.push(elimDer);
//     }
//     array = array.concat(izq, der);
//     return array;
//   }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
