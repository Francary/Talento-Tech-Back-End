import express from 'express'

const app = express()

app.get('/', (req , res) =>{
    res.send(` Hola , mundo desde Servidor Express`)
})

const PORT = 5000 

app.listen(PORT, () =>{
   console.log(`Servido iniciado correctamente en el Puerto http://localhost:${PORT}`);
    
})


app.get('/productos', (req, res) => {
res. send( 'Bienvenida a la pagina de productos' );
})


app.get(`/productos/:id`, (req, res) => {
const { id } = req.params
res.send(`Estás viendo el producto # ${id}`)
})