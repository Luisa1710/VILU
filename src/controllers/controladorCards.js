export function pintarProductos(productos) {
  // PASOS PARA HACER RENDER DE ETIQUETAS HTML DESDE JAVASCRIPT (TRAVERSING)
  
  // 1. Crear una referencia en memoria (Variable) que almacene la etiqueta sobre la cual voy a pintar
  // Es decir la etiqueta padre o etiqueta raiz
  
  let fila = document.getElementById ("fila")
  
  // 2.Recorro el arreglo de datos y le aplico traversing
  // El nombre del parametro de la funcion anonima debe llamarse como el arreglo en singular
  productos.forEach(function(producto){
  
    //2.1 Creando una columna desde JS 
  
    let columna = document.createElement("div")
    columna.classList.add ("col")
  
    // 2.2 Creando una tarjeta
  
    let tarjeta = document.createElement("div")
    tarjeta.classList.add ("card", "h-100", "text-center","shadow")
  
    //2.3 Creando la foto
    
    let fotoProducto = document.createElement("img")
    
    fotoProducto.classList.add ("img-fluid","w-100")
    fotoProducto.src = producto.fotos[0]
  
    let nombreProducto =document.createElement("h3")
    nombreProducto.textContent = producto.nombre
  
    let precioProducto =document.createElement("h2")
  
    precioProducto.classList.add("fw-bold")
    precioProducto.textContent ='$' +  producto.precio + ' COP'
     
   // 2.4 DETECTANDO UN EVENTO
  
   columna.addEventListener("mouseover", function(){
    fotoProducto.src = producto.fotos[1]
   } )
   columna.addEventListener("mouseleave", function(){
    fotoProducto.src = producto.fotos[0]
   })
  
    // 3. Defino padres e hijos
   
    tarjeta.appendChild(fotoProducto)
    tarjeta.appendChild(nombreProducto)
    tarjeta.appendChild(precioProducto)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
  
  
  }) 
  }
  
    