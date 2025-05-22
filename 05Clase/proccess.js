
/*¿Qué es process.argv?

    Es un array que contiene los argumentos del proceso.

    Siempre contiene al menos dos elementos:

        La ruta al ejecutable de Node (node)

        La ruta del archivo JavaScript que estás ejecutando */


// Ignoramos los dos primeros elementos con slice
const args = process.argv.slice(2);

if (args[0] === 'saludar' ) {
console. log(`¡Hola, ${args[1] || 'mundo'}!`);
} else if (args[0] === 'despedir' ) {
console. log(`¡Adios, ${args[1] || 'mundo' } !`);
} else {
console. log( `Comando no reconocido. Usa "saludar" o "despedir".`)}