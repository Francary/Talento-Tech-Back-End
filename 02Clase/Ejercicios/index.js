let mensaje = "Hola desde Node JS"

console.log(`${mensaje}`);


const calculadora = (operacion, a, b) => {
    const operaciones = {
        sumar: () => a + b,
        restar: () => a - b,
        multiplicar: () => a * b,
        dividir: () => b !== 0 ? a / b : "No se puede dividir por cero"
    }
    const resultado = operaciones[operacion]
    return resultado ? resultado() : " Las Operaciones Validas son sumar , restar , multiplicar , dividir"
}
console.log(calculadora("sumar", 5, 10));



