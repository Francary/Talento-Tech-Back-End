const url = 'https://fakestoreapi.com/products'

const config = {
    method: 'GET',
    headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token'
    },
    
}


fetch( url , config)
.then((response) => response.json( ) )
.then((data) => console.log(data));


// const config = {
// method: 'POST',
// headers: {
// 'Content-Type' : 'application/json',
// 'Authorization' : 'Bearer token',
// },
// body: JSON.stringify({ key: 'value' }),
// }

// fetch('https://fakestoreapi.com/products', config)
// .then(response => response.json( ) )
// .then(data => console.log(data))
// .catch(error => console.error( 'Error:', error) );
