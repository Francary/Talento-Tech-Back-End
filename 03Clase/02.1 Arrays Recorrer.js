/* Iteradores de Array */
const numeros = [100, 50, 20.55, 12.5, 75];
console.log(numeros);

console.log(`Usando for in`);
for (const index in numeros) {
    numeros[index] = Number((numeros[index] * 10))
    console.log(`Impreme el recorrido del index ${index} ${numeros}`);
    
}
console.log(numeros);


console.log(`Usando for of`);
for (let numero of numeros) {

    numero = Number((numero / 10)*2 )
    console.log(`Impreme el recorrido del index ${numero} `);
    
}
console.log(numeros);

console.log(`Usando for`);

for (let index = 0; index < numeros.length; index++) {
    numeros[index] = Number((numeros[index] * 5))
    console.log(`Impreme el recorrido del index ${index} ${numeros[index]}`);
}


console.log(`Usando forEach`);
numeros.forEach((numero, index) => {
numeros[index] = Number((numero*1.1).toFixed(2));
console.log( `El numero es: ${numeros[index]} `);
});

console.log(numeros);