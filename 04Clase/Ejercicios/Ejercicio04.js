/*Ejercicio 1 - La prueba de la flota: */

/*Misión 1: 
1.  Crea un array con 10 objetos, donde cada objeto represente un automóvil con la 
siguiente información:

○  Marca 
○  Modelo 
○  Año 
○  Color

*/

const flota = [
{
    marca : 'Ford',
    modelo: 'Ranger',
    año: 2025,
    color: 'Gris'
},

{
    marca : 'Ford',
    modelo: 'Explorer',
    año: 2024,
    color: 'Azul'
},
{
    marca : 'Ford',
    modelo: 'Mustang',
    año: 2015,
    color: 'Rojo'
},
{
    marca : 'Chevrolet',
    modelo: 'Silverado',
    año: 2020,
    color: 'Negro'
},
{
    marca : 'Chevrolet',
    modelo: 'Spark',
    año: 2009,
    color: 'Gris'
},
{
    marca : 'Toyota',
    modelo: 'Corolla',
    año: 2021,
    color: 'Vinotinto'
},
{
    marca : 'Toyota',
    modelo: 'S4',
    año: 2025,
    color: 'Negro'
},
{
    marca : 'Fiat',
    modelo: 'Palio',
    año: 2014,
    color: 'Verde'
},
{
    marca : 'Ferrari',
    modelo: '900',
    año: 2022,
    color: 'Rojo'
},
{
    marca : 'Tesla',
    modelo: '3',
    año: 2022 ,
    color: 'Rojo'
},


]

/*
2.  Usa un método de array para recorrer la lista e imprime por consola todos los datos de los automóviles cuyo año sea mayor a 2018. */

flota.forEach((auto) => {

    if(auto.año > 2018){
        return  console.log(auto);
    }  

   
}
    
)



/*
Misión 2:

1. Crea una función que recorra el array de automóviles.
2. Usa destructuring dentro de la función para obtener el color de cada automóvil.
3. La funcion debe aceptar un color como parametro y devolver por consola cuantos
automoviles tienen ese color.

*/
const contarPorColor = (colorBuscado) => {
    let contador = 0;

    flota.forEach(({ color }) => { 
        if (color === colorBuscado) {
            contador++;
        }
    });

    console.log(`Hay ${contador} autos de color ${colorBuscado}`);
}


contarPorColor('Rojo')
contarPorColor('Blanco')
contarPorColor('Negro')
