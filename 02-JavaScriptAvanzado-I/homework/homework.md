# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5; 
var b = 10; 
var c = function (a, b, c) {
   var x = 10;
   console.log(x); // 10 (se sobreescribe el valor por el var)
   console.log(a); // 8 (porque primero busca el valor dentro de su scoope, y por parametro le pasan 8)
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 8 (porque se iguala a a y a vale 8 porque es el mismo valor que los parametros)
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9 (porque tiene el valor que le pasaron por parametro ya que esta fuera del contexto de f)
};
c(8, 9, 10);
console.log(b); // 10 (porque nunca se la sobreescribe con var dentro de la funcion)
console.log(x); // (5 porque la sobreescriben dentro de f)
```

```javascript
console.log(bar);// undef (por hoisting var lo toma como definido pero no su valor)
console.log(baz);// error (porque no está declarado con var)
foo();
function foo() {
   console.log('Hola!'); //hola (por hoisting que en funciones si se puede ver el valor)
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);//franco (porque se sobreescribe)
```

```javascript
var instructor = 'Tony';
console.log(instructor); //Tony (lo acaban de declarar)
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); //franco (no se sobreescribe)
   }
})();
console.log(instructor); //Tony (no se sobreescribe porque las funciones anonimas sirve para que ningun dato se pise)
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash'; 
   let pm = 'Reverse Flash';
   console.log(instructor);// The flash (se sobreescribe Tony)
   console.log(pm);// Reverse flash (se crea una nueva variable pm dentro del bloque if)
}
console.log(instructor); //The flash (se sobreescribe Tony)
console.log(pm);//franco (porque es el let global)
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" //9 px(porque el px esta después y primero se hace la suma) 
"$" + 4 + 5 // $ 45 (porque como esta antes el $ se concatena con el 4 y el 5 como string)
"4" - 2 //2
"4px" - 2 //2 px (porque como no es un signo de suma no puede concatenar)
7 / 0 // infinity (porque no se puede dividir por 0)
{}[0] // undef (no hay nada definido)
parseInt("09") //9 (se transforma a numero)
5 && 2 // 2 (devuelve el ultimo true porque evalua los dos)
2 && 5 // 5 (devuelve el ultimo true porque evalua los dos)
5 || 0 // 5 (devuelve el primer true)
0 || 5 // 5 (porque el 0 es falsy, entonces lo toma como false) 
[3]+[3]-[10] //23 (concatena los dos arrays como string "33" y después los transforma y resta 10)
3>2>1 //false (porque primero evalua si el 3 es mayor a 2 y da como resultado true, y el true despues lo evalua con el 1, preguntando si true es mayor a 1)
[] == ![] // true (porque no tiene el igual estricto)
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // udef (porque esta con var pero definido despues)
   console.log(foo()); // 2 (hoisting)

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
   if (food) {
      var snack = 'Friskies'; //nunca se cambia porque se pasa un false como parametro, y como siempre va a evaluar false el if nunca va a entrar
      return snack; 
   }
   return snack;//undefined (porque si bien el if de food nunca entra, antes de ejecutarlo primero se crea en memoria el espacio de la var snack, pero nunca se lee su valor, por lo cual queda como undefined. y esto se da así porque el return está dentro de la función)
}

getFood(false);
```

### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function () {
         return this.fullname; 
      },
   },
};

console.log(obj.prop.getFullname()); // 'Aurelio De Rosa' (porque esta llamando a la funcion de prop y dentro de esta esta declarada el fullname)

var test = obj.prop.getFullname;

console.log(test()); //'Juan Perez' (porque lo está ejecutando desde el contexto global)
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // primero (porque se ejecuta por linea)
   setTimeout(function () {
      console.log(2); //cuarto (por el tiempo de espera puesto que tiene)
   }, 1000); 
   setTimeout(function () {
      console.log(3);
   }, 0); //tercero (porque aunque sea 0 ya se le setea un tiempo de espera y eso ya lo hace llamar a la api)
   console.log(4); //segundo (porque no tiene timeout )
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
