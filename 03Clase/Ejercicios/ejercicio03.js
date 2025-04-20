/* 
Ejercicio Práctico

Calculando con Precision

Ejercicio 1
Después de demostrar tus primeros pasos con Node.js, Matías y Sabrina te plantean un
reto mas interesante.

"Imaginá que los precios de los productos del cliente están listos para
cargarse en el sistema", te dicen. Pero hay un detalle: antes de enviarlos,
tenés que calcular el IVA del 21% y presentarlos de manera clara.

Tu misión:

1. Creá un array con 10 números que representen los precios de los productos. */

const valorSinIVA = [ 10 , 50 , 100 , 150, 200, 250 , 300, 350 , 400 ,500 ]


/* 
2. Utiliza un método de array para calcular el precio con IVA incluido para cada valor.*/

const valorConIVA = valorSinIVA.map((precio) => precio * 1.21)

/*
Ejercicio 2

Ahora que tenés los valores con IVA calculados, es momento de mostrarlos
como un desarrollador profesional. Matías te desafía a usar template literals
para estructurar tu salida de esta forma:

El precio es: ${valorConIVA} .- IVA incluido.

Imprimi cada precio ajustado en la consola siguiendo este formato. Cada mensaje debe ser
claro y profesional, como si estuvieras preparando un reporte para el cliente. */

console.log(`Opcion 1`);

    for (let valor of valorConIVA ){
        console.log(`El precio es: ${valor} .- IVA incluido.`);
        
    }

console.log(`Opcion 2`);

    for (let valor of valorSinIVA){
        console.log(`El precio es: ${valor} + IVA el Toltal es :${valor*1.21}  .-Con IVA incluido.`);
        
    }

console.log(`Opcion 3`);

    for (let i = 0; i < valorSinIVA.length; i ++){
        const valor = valorSinIVA[i]
        const valorIVA = valorConIVA[i]
        console.log(`El precio es: ${valor} + IVA el Toltal es : ${valorIVA}  .-Con IVA incluido.`);

    }
