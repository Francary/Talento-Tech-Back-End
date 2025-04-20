const funcionUnaLinea = () => 20 - 10 ;
console.log(`Funcion Lineal ${funcionUnaLinea()}`);


const funcionMultiLinea = () => {
    const suma = 10 + 5 ;
    return  suma
}
console.log(`Funcion Mulit Linea ${funcionMultiLinea()}`);


const funcionConParametro = (numA, numB) => {
    const resultado = numA + numB
    return resultado
}

console.log(`Funcion con Parametro ${funcionConParametro(20,30)}`);

/* Funciones de Orden Superior ( callback ) */

const suma = (a,b) => a + b
const resta = (a,b) => a - b

const calculadora = (a , b , operacion) => operacion(a,b)
console.log(`---- Callback ----`);

console.log(`Resultado de Suma ${calculadora(15,10,suma)}`);
console.log(`Resultado de Resta ${calculadora(15,10,resta)}`);


