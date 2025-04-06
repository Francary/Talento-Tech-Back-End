const tareaNoBloqueante = () => {
    setTimeout(()=>{
        console.log('Tarea No Bloqueante Terminada');
        
    }, 5000)
}

console.log('Inicio del Programa');

tareaNoBloqueante()

console.log('Fin del Programa');

