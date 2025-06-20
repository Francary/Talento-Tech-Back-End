import { log } from 'console'
import http from 'http'

const server = http.createServer((req , res) =>{
    res.statusCode = 200

    res.setHeader('Content-Type', 'text/plain')

    res.end(`Hola, Mundo ....`)
})



const PORT = 3000;

server.listen( PORT, ()=>{
    console.log(`Servido iniciado correctamente en el Puerto http://localhost:${PORT}`);
    
})