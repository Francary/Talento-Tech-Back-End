const taskAsync = (callback) => {
    setTimeout(()=>{
        console.log('Tarea asincronica completada');
        callback()
        
    },3000)

}

console.log('Inicio la tarea');
taskAsync(()=>{
    console.log('Fin de la Tarea');
    
})
