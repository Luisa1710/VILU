import { productosCategorias } from "../helpers/Database.js"
import { pintarProductos } from "./controladorCards.js"
import{buscarProductos} from "./controladorBuscar.js"
import {ampliarInfoProducto} from './controladorEvento.js'

console.log(productosCategorias)
pintarProductos(productosCategorias)
buscarProductos()



let contenedor =  document.getElementById ("fila")
contenedor.addEventListener ("click", function(evento){
   
   let producto = ampliarInfoProducto(evento)
  
    
    console.log (producto)

    //Almacenar en el local storage la informacion del producto seleccionado

    localStorage.setItem('infoProducto',JSON.stringify (producto))

    console.log(localStorage.getItem('infoProducto'))

    window.location.href = './src/views/ampliarinfo.html'


})