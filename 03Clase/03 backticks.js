const userName = 'Francary';
const nacimiento = new Date(1986,5,24);
const hoy = new Date()

const edad = new Date( hoy - nacimiento ).getUTCFullYear() - 1970

console.log(nacimiento);
console.log(hoy);
console.log(edad);



console.log(`Hola, mi nombre es ${userName} y tengo ${edad} años.`);




const message = `Esta es una cadena
que ocupa varias
líneas.` ;

console.log(message);