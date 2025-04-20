/* Arrays */

const fruits = ['Pera', 'Manzana', 'Frutilla', 'Durazno']

console.log(`Longitud del Array ${fruits.length}`);
console.log(`Consulta Index 2 Array ${fruits[2]}`);

/* Metodos de Arrays */

fruits.push('Kiwi1') /* Agrega al INICIO del Array */
fruits.unshift('Kiwi2') /* Agrega al FINAL del Array */

console.log(fruits);


fruits.pop() /* Elimina al INICIO del Array */
fruits.shift() /* Elimina al FINAL del Array */

console.log(fruits);


/* Unir elementos de Array en una cadena String */
console.log(fruits.join(' <- -> '));

/* Recorrer un Array */
fruits.forEach((fruta) => console.log(fruta))

/* Filtrar un Array */

const prices = [125 , 250 , 50 , 1500 , 400 ]
console.log(`Array prices ${prices}`);


console.log(prices.filter((precio) => precio >= 200));


const paises = ['Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 'Guyana', 'Paraguay', 'Perú', 'Uruguay'];

console.log(`Array Paises Original ${paises}`);

/* Metodo .slice(start, end): Devuelve los elementos desde la posición start hasta end (excluido). Inmutable */
console.log(`Nuevo Array Paises con slice ${paises.slice(2,5)}`);

/* Metodo .splice(start, size): Altera el array, eliminando size (cantidad de elementos) desde posición start. Mutable */
console.log(`Nuevo Array Paises con splice ${paises.splice(2,5)}`);


/* Metodo .copyWithin(pos, start, end): Altera el array, modificando desde pos y copiando los items desde start a end. Mutable */
console.log(`Nuevo Array Paises con copyWithin ${paises.copyWithin(2,5,2)}`);

/* Metodo .fill(element, start, end): rellena el array con element desde start hasta end. Mutable */
console.log(`Nuevo Array Paises con fill ${paises.fill('Venezuela',4,7)}`);

/* Metodo .map */
console.log(`Metodo .map del Array prices ${prices.map((precio) => precio * 1.21)}`);

/* Metodo .reduce */

console.log(`Metodo .reduce del Array prices ${prices.reduce((total , precio) => total + precio , 0)}`);


/* Iteradores de Array */

for (let fruta of fruits) {
    console.log(fruta);
    
}