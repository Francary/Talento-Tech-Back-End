
const taskAsync = () => {
    return new Promise ((resolve , reject)=>{

        setTimeout(()=>{
            if (Math.random() < 0.5){
                resolve('Tarea asincronica completada Exitosamente')
            }else{
                reject(new Error('Tarea asincronica ha fallado '));
                
            }
    }, 3000)
 })
}

const executeAsyncTask = async () =>{
    console.log('Inicio de la tarea');
    try {
        const result = await taskAsync()
        console.log(result);
        
    } catch (error) {
        console.log(error);       
    }finally{
        console.log('Fin de la Tarea');
        
    }
    
}

executeAsyncTask()

