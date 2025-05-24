/* Ejercicio Práctico.

Ejercicio 1 - Consumir una API con Promesas

Matías y Sabrina están cada vez más interesados en tu progreso. "Es momento de
adentrarte en el mundo real de las APIs", dice Sabrina con una sonrisa desafiante.

*Queremos ver cómo manejás datos externos y cómo aprovechás las
herramientas de JavaScript para hacerlo de manera eficiente".

Matías añade: "Piensa en este ejercicio como una simulación. En proyectos
reales, consumirás APIs externas todo el tiempo. Este desafio evaluará tu
habilidad para hacerlo de manera estructurada y profesional". */

/* Misión:

1. Utiliza la API pública de Rick and Morty (https://rickandmortyapi.com/documentation/) para obtener la lista de personajes. */

const url = 'https://rickandmortyapi.com/api/character'

/*
2. Con las herramientas then, catch y finally, procesa la respuesta y devuelve por
consola un array con los primeros 5 resultados de los 20 personajes recibidos. */

fetch(url)
.then(response => response.json())
.then( data => {
    console.log('INICIA SOLICITUD CON PROMESAS');
    const cantidadPersonajes = 5
    const personajes = data.results.slice(0,cantidadPersonajes)
    const filtroPersonajes = personajes.map(personajes => ({
        id: personajes.id,
        name: personajes.name,
        species: personajes.species,
    }))
    
console.log(filtroPersonajes);


})
.catch(error => console.error('Este es el Error', error))
.finally( ()=> console.log('Solicitud finalizada con PROMESAS'))



/* Ejercicio 2 - Explorando la API con Async/Await

Impresionados por tu desempeño con promesas, Matías da un paso al frente.
"El enfoque con promesas es sólido, pero en muchos casos queremos trabajar
de manera más legible y fluida. Aqui es donde entra async/await. Veamos si
podés replicar tu solución anterior usando esta técnica".

Misión 2:

1. Realiza el mismo ejercicio anterior, pero esta vez usa una función asíncrona con
async y await para consumir la API.

2. Asegúrate de manejar errores correctamente con un bloque try/catch.*/

const personajes = async () =>{
    console.log('INICIA SOLICITUD CON ASYNC AWAIT');
    // const url = 'https://rickandmortyapi.com/api/location'
    try {
        const response = await fetch(url)
        const data = await response.json()
        const cantidadPersonajes = 1 
        const personajes = data.results.slice(0,cantidadPersonajes)
        const filtroPersonajes = personajes.map(personajes => ({
        id: personajes.id,
        name: personajes.name,
        species: personajes.species,
    }))
    
console.log(filtroPersonajes);

    } catch (error) {
        console.error('Este es el Error', error)
    }
    finally{
        console.log('Solicitud finalizada CON ASYNC AWAIT')
    }
}
personajes()
/*
Matias concluye: "Queremos ver un código limpio, facil de entender y bien estructurado. Si
podés manejar ambas técnicas, será una señal de que estás preparado para enfrentar
tareas reales en TechLab". */