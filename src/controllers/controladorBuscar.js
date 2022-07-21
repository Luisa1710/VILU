import { productosCategorias } from "../helpers/Database.js"
import { pintarProductos } from "./controladorCards.js"

export function buscarProductos(){

let buscador = document.getElementById ('buscador')

buscador.addEventListener("keyup", function(evento){

let productoBuscado = evento.target.value

let filtro = productosCategorias.filter(function(producto){

    return (producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase()) )
})
console.log(filtro)
pintarProductos(filtro)

})
}
