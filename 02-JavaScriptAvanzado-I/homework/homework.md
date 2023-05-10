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
   console.log(x); // 10 (porque al declarar la variable x dentrode la  funcion se se toma esta)
   console.log(a); // 8 (porque por cuestión de prioridad, el primer lugar donde se  evalúa la "a" recibida por parámetro)
   var f = function (a, b, c) {
      b = a;
      console.log(b); // 8 (porque arriba se asigna el mismo valor que a)
      b = c;
      var x = 5;
   };
   f(a, b, c);
   console.log(b); // 9 (queda como cuando se la llama a la funcion)
};
c(8, 9, 10);
console.log(b); //10 (porque es la variable global)
console.log(x); // undefined? (porque no está declarada "x" global, solo está puesto el valor)
```

```javascript
console.log(bar);//undefined (por hosting, o sea, la variable está declarada después del console.log)
console.log(baz);//error? (porque no está definido baz con var ni nada)
foo();
function foo() {
   console.log('Hola!'); //hola (está bien porque el hosting con las funciones se ejecuta correctamente)
}
var bar = 1;
baz = 2;
```

```javascript
var instructor = 'Tony';
if (true) {
   var instructor = 'Franco';
}
console.log(instructor);//Franco (está declarado dentro del contexto de if, pero cuenta como global porque no está dentro de una función)
```

```javascript
var instructor = 'Tony';
console.log(instructor); //Tony 
(function () {
   if (true) {
      var instructor = 'Franco';
      console.log(instructor); //Franco
   }
})();
console.log(instructor); //Tony (porque "Franco" está declarado dentro del contexto de la función o Franco porque creo que var se declara para cualquier contexto)
```

```javascript
var instructor = 'Tony';
let pm = 'Franco';
if (true) {
   var instructor = 'The Flash'; 
   let pm = 'Reverse Flash';
   console.log(instructor);// The Flash (porque se sobreescribe la variable)
   console.log(pm);// "Reverse flash" (porque let solo tiene alcance en donde fue declarada)
}
console.log(instructor); //The flash?
console.log(pm);//Franco (porque let solo tiene alcance en donde fue declarada)
```

### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" // 2
"2" * "3" // 6
4 + 5 + "px" // 9px (por el orden de prioridad, primero están los int)
"$" + 4 + 5 // $45 (por el orden de prioridad, primero está el string)
"4" - 2 // 2
"4px" - 2 // 4px - 2 (lo transforma en string porque el 4 está con un string)
7 / 0 // error (porque no se puede dividir por 0)
{}[0] // undefined (porque no hay nada definido)
parseInt("09") //09 (number, está convirtiendo el string a int)
5 && 2 //2 (porque evalua si los dos son true, y al ser los dos, devuelve el ultimo como si devolviera un true)
2 && 5 // 5 (porque evalua si los dos son true, y al ser los dos, devuelve el ultimo como si devolviera un true)
5 || 0 // 5 (ya que evalúa la primera opción y es verdadera)
0 || 5 // 5 (porque el 0 es un falsy)
[3]+[3]-[10] //23 (toma los dos tres como si fueran strings y después le restan el 10)
3>2>1 //false (porque transforma el 3 > 2 en true y después compara ese true con el 1
[] == ![] //true (porque no es una comparación literal? o sea ===)
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).

### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined (porque como es una variable el hosting se aplica solo para que no salga error, pero al estar declarada después igual no se sabe el valor)
   console.log(foo()); // 2 (porque con las funciones el hosting se aplica correctamente y funciona como si antes se hubiera definido la funcion)

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
      var snack = 'Friskies'; //este valor nunca se cambia porque por
      return snack; //parametro ya se recibe un false, por lo cual nunca entra al if
   }
   return snack;// no es Meow porque primero se crean las funciones? 
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

console.log(obj.prop.getFullname()); // Natalia Nerea? (porque toma el contexto del obj en donde está declarada la funcion getFullname())

var test = obj.prop.getFullname;

console.log(test()); //
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // 2º (porque es por linea el primero que se ejecutaria si no estuviera el timeout de tiempo 0)
   setTimeout(function () {
      console.log(2); //4º (por el timeout 1000 que hace que espere 1000)
   }, 1000); 
   setTimeout(function () {
      console.log(3);
   }, 0); //1º este (porque es el que tiene la prioridad más baja)
   console.log(4); //3º (porque por linea es el que se debería ejecutar antes del timeout de 1000) 
}

printing();
```

</br >

---

## **✅ FEEDBACK**

### Usa este [**formulario**](https://docs.google.com/forms/d/e/1FAIpQLSe1MybH_Y-xcp1RP0jKPLndLdJYg8cwyHkSb9MwSrEjoxyzWg/viewform) para reportar tus observaciones de mejora o errores. Tu feedback es muy importante para seguir mejorando el modelo educativo.
