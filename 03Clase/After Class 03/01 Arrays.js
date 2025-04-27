const nombres = ["Lucía", "Mateo", "Valentina", "Santiago", "Camila", "Benjamín", "Isabella", "Tomás", "Emilia", "Juan"];


const formatearArray = (miArray) => {

    return miArray.map( texto => texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
    ) 
}

const cantidadLetras = 6;

const filtroNombres = nombres.filter(nombre => nombre.length > cantidadLetras)
console.log(`
    Filtrar Por Cantidad de Letras:`);
console.log(filtroNombres);

const filtroPorLetras = nombres.filter(nombre => nombre > 'M')

console.log(`
    Filtro por Codigo ASCII:`);
console.log(filtroPorLetras);


const nombresABuscar = ["Valentina", "Santiago","TOMAS"];

const nombresABuscarFormateado = formatearArray(nombresABuscar)

const algunosNombres = nombres.filter(nombre =>{
    
    const nombresFormatedo = nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    
    return nombresABuscarFormateado.includes(nombresFormatedo) 

}) 

console.log(`
    Filtro por Listado de Nombres:`);
console.log(algunosNombres);

const productos = {
    "Basto": [1, 2, 3],
    "Copa": [2, 9, 5]
  };