'use strict';

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first
   (DFS) en cualquiera de sus variantes, según se indique por parámetro 
   ("post-order", "pre-order", o "in-order"). Nota: si no se provee 
   ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en
la imagen bst.png dentro del directorio homework.
*/
function BinarySearchTree(value) {
   this.value = value;
   this.left = null;
   this.right = null;
   this.totalLength = 1;
 }
 
 BinarySearchTree.prototype.size = function(){
  return this.totalLength;
 }
 
 BinarySearchTree.prototype.insert = function (value) {
   // Mayor o menor
 
   // Izq / menor
 
   if (value < this.value) {
     if (this.left === null) {
       this.left = new BinarySearchTree(value);
     } else {
       this.left.insert(value);
     }
   }
   else if (value >= this.value) {
     if (this.right === null) {
       this.right = new BinarySearchTree(value);
     } else {
       this.right.insert(value);
     }
   }

   this.totalLength++;
 };
 
 BinarySearchTree.prototype.contains = function (value){
  
  if(value === this.value){
    return true;
  } 
  else { 
    if (value < this.value) {
    if (this.left) {
      return true;
    }
    else {
      this.left.contains(value);
    }
    }
  }
  if(value > this.value){
      if (this.right) {
        return true;
      }
      else {
        this.right.contains(value);
      } 
    }
  }

 BinarySearchTree.prototype.depthFirstForEach = function (cb, order){

  switch (order) {
    // root => izq > der
    case "pre-order":
      cb(this.value); // imprimirValor(this.value)
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      break;

    // izq - der - root
    case "post-order":
      this.left && this.left.depthFirstForEach(cb, order);
      this.right && this.right.depthFirstForEach(cb, order);
      cb(this.value);
      break;

    // izq - root - der
    default:
      if (this.left !== null) this.left.depthFirstForEach(cb, order);
      cb(this.value);
      if (this.right !== null) this.right.depthFirstForEach(cb, order);
      break;
 
 }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, almacen = []) {
  cb(this.value);

  if (this.left !== null) {
    almacen.push(this.left);
  }

  if (this.right !== null) {
    almacen.push(this.right);
  }

  if (almacen.length > 0) {
    almacen.shift().breadthFirstForEach(cb, almacen);
  }
}

 



//  BinarySearchTree.prototype.insert = function(valor){
//   if(valor <= this.root){
//       if(this.left){
//          this.left.insert(valor)
//       }
//       else{
//          this.left = new BinarySearchTree(valor)
//       }
//    }
//    else{
//       if(this.right){
//          this.right.insert(valor)
//       }
//       else{
//          this.right = new BinarySearchTree(valor)
//       }
//    }


/*BinarySearchTree.prototype.contains = function(arg){    
  if (this.value===arg){return true}    
  else {      
    if (this.value < arg){       
    if (this.right){          
    return this.right.contains(arg)       
  } else return false      
  }      
  if (this.value > arg){         
  if (this.left){            
  return this.left.contains(arg)          
}else return false       }    } }
// }*/
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
   BinarySearchTree,
};
