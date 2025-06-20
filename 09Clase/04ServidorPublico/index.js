import express from 'express'
import {join , dirname} from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()

app.use(express.static(join(__dirname, 'public')))

// Middleware de aplicacion 

app.use((req , res, next) =>{
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next()
    
})

app.get('/prueba',(req, res) =>{
    res.send('Hola desde Express usando Middlewares')
})


const PORT = 4000
app.listen(PORT, ( ) => {
   console.log(`Servido iniciado correctamente en el Puerto http://localhost:${PORT}`)
    
})