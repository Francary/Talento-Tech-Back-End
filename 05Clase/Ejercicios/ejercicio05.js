/*Ejercicio 2 - ¡Acciones dinámicas con Node.js!

Con el proyecto configurado, Matías lanza el siguiente desafío.

"El siguiente paso evalúa tu capacidad para manejar interacciones
dinámicas en Node.js", dice mientras sonrie. "Queremos que implementes
un sistema simple para procesar comandos desde la terminal".

Misión 2:

1. Si el comando es npm run start GET, imprime por consola el mensaje:
Toma un dato

2. Si el comando es npm run start POST {data}, imprime por consola el
mensaje:

Recibimos {data} satisfactoriamente

3. Si el comando es npm run start PUT {id}, imprime por consola el mensaje:

Modificamos el item con id: {id} satisfactoriamente

4. Si el comando es npm run start DELETE {id}, imprime por consola el
mensaje:

El item con el id: {id} se eliminó con éxito

Matías concluye: "Este desafío es clave para ver cómo manejas el flujo de datos y
comandos, algo vital en cualquier proyecto backend".
*/


/* ---- OPCION 1 ----- */
const args = process.argv.slice(2);

if (args[0] === 'GET' ) {
console. log(`Con Metodo GET se Obtinen datos!`);
} else if (args[0] === 'POST' ) {
console. log(` Con Metodo POST se Crean datos !`);
} else if (args[0] === 'PUT' ) {
console. log(` Con Metodo PUT se Actualizan datos !`);
} else if (args[0] === 'DELETE' ) {
console. log(` Con Metodo DELETE se Elmiminan datos !`);
} else {
console. log( `Comando no reconocido. Los Metodos Disponibles son GET , POST , PUT , DELETE.`)}

/* ---- OPCION 2 ----- */

/* Crear los Script directamente en el package.json */