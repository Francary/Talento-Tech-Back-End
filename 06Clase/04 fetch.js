const url = 'https://fakestoreapi.com'

const config = {
    method: 'GET',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token'
    },
    
}


fetch( `${url}/products` , config)
.then((response) => response.json( ) )
.then((data) => {
    console.log(`---------> RESPUESTA PRODUCTOS <-----------`);
    console.log(data)
 });


const users = async () =>{
    
    try {
        
        const response = await fetch(`${url}/users` , config)
        const data = await response.json()
        console.log(`---------> RESPUESTA USERS <-----------`);
        console.log(data);
    } catch (error) {
        console.log(error);
        
    }
 
}

users()