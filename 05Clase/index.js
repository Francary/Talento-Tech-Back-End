import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs'


// Obtener la ruta del archivo actual
const __filename = fileURLToPath(import.meta.url);
console.log(__filename);

// Obtener el directorio actual
const __dirname = path.dirname(__filename);
console.log(__dirname);

console.log(path.join(__dirname, "prueba.js"));

const pathFlota = path.join(__dirname, 'flota.json')


const flota = fs.readFileSync(pathFlota, 'utf-8')

console.log(flota);

console.log("Probando Nodemon");
