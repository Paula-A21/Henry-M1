"use strict";

function BinarioADecimal(num) {
  // 011001 = 25
  // <------- leyendo de der a izq
  //    1 * 2 ** 0  = 1
  //    0 * 2 ** 1  = 0
  //    0 * 2 ** 2  = 0
  //    1 * 2 ** 3  =  8
  //    1 * 2 ** 4  =  16
  //    0 * 2 ** 5  =   0

  var array = [];
  var numerosSeparados = num;
  numerosSeparados = numerosSeparados.toString().split("").reverse();

  for (let i = 0; i < numerosSeparados.length; i++){
    array [i] = numerosSeparados [i];
    array [i] = array [i] * 2 ** i;
  }

  var resultado = array.reduce(function (acc, element){
    return acc + element;
  })

  return resultado;
}

function DecimalABinario(num) {
  // 91 = 1011011
  // 91 / 2 = 45  (.5) ===> 1
  // 45 / 2 = 22   (.5) ===> 1
  // 22 / 2 = 11  (0) ===> 0
  // 91 / 2 = 45 residuo 1
  // 45 / 2 = 22 residuo 1
  // 22 / 2 = 11 residuo 0
  // 11/ 2 = 5 residuo 1
  // 5 / 2 = 2 residuo 1
  // 2 / 2 = 1 residuo 0
  // 1 / 2 = 0 residuo 1

  var guardado = num;
  var binarios = [];

  while(guardado > 0) {
    if (guardado % 2 === 0){
      binarios.push(0);
    }
    else {
      binarios.push(1);
    }

    guardado = guardado / 2;
    guardado = Math.trunc(guardado); 
  }

  return binarios.reverse().join("");
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
