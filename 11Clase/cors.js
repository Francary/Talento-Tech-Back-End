/*Middeleware Para solicitudes cruzadas*/
app.use((req, res, next) =>{
    /* Definimos Dominio que se va a Permitir*/
    res.header('Acces-Control-Allow-Origin', 'https:example.com');
    /*Metodos Permitidos*/
    res.header('Acces-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    /*Encabezados Permitidos*/
    res.header('Acces-Control-Allow-Headers', 'Content-Type, Authorization');
    /*Permitir Cookies - Credenciales*/
    res.header('Acces-Control-Allow-Credentials', 'true');
    next()
})