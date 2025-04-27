/* Destructuring operator */

const numeros = [1, 2, 3];

const [a, b, c] = numeros

console.log(a);
console.log(b);
console.log(c);

const persona = {
    nombre: "Ana",
    edad: 25,
}

const { edad, nombre } = persona;

console.log(nombre);
console.log(edad);

/* Utilizar valores predeterminados en caso que el objeto no posea esa propiedad */

const { apellido = 'No Existe' } = persona;
console.log(apellido);

/* Renombrar propiedades, en caso que ya exista una variable con ese nombre */

const { nombre: nombrePersona } = persona;
console.log(nombrePersona);

/* Destructuring anidado, para cuando tenemos objetos de más de 1 nivel de profundidad */

const usuario = {
    info: {
        name: "Luis",
        age: 30

    }
}

const { info: { name, age } } = usuario;
console.log(name);

/* Spread operator */
const x = [1, 2];
const y = [3, 4];
const combinado = [ ... x, ... y];

console.log(combinado);


const original = [1, 2, 3 , 4 , 5, 6, 7];
const copia = [ ... original];
console.log(copia);


/*Combinar 2 o más objetos */
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinadoObj = { ... obj1, ... obj2 };
console. log(combinadoObj);


/* Clonar o copiar un objeto */

const originalObj = { a: 1, b: 2 };
const copiaObj = { ... originalObj };
console. log(copiaObj);