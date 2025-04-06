const tareaNoBloqueante = () => {
    setTimeout(() =>{
        console.log('Tarea 2 No Bloqueante terminada ');
        
    } ,3000)
}

const tareaAsync = () => {
    return new Promise(resolve =>{
        setTimeout(() =>{
            resolve('Tarea con Async Terminada')
    },5000)
    })
}

const main = async () => {
    console.log('Inicio del Programa');
    const resultado = await tareaAsync()
    console.log(resultado);
    console.log('Fin del Progama');
    
    
    
}

main()
tareaNoBloqueante()