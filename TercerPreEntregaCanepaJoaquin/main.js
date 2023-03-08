
class Producto {
  constructor(nombre,precio,imagen){
      this.nombre= nombre;
      this.precio= precio;
      this.imagen= imagen
  }
}
const remera= new Producto("Remera",7000,"remera.jpg")
const pantalon= new Producto("Pantalon",14000,"pantalon.jpg")
const buzo= new Producto("Buzo",15000,"buzo.jpg")
const productosCarritoCard= document.getElementById("productosCarrito")
const div= document.createElement("div")

let precioTotal=0
let arrayProductos=[]
let clickRemera= document.getElementById("agregarRemera")
clickRemera.addEventListener("mouseup", agregarRemera)
let clickPantalon= document.getElementById("agregarPantalon")
clickPantalon.addEventListener("mouseup", agregarPantalon)
let clickBuzo= document.getElementById("agregarBuzo")
clickBuzo.addEventListener("mouseup", agregarBuzo)
let carrito= document.getElementById("btnVaciarCarrito")
carrito.addEventListener("mouseup", limpiarCarrito)
precioFinalCarrito()


function agregarRemera(){
  arrayProductos.push(remera)
  precioTotal = arrayProductos.reduce((acum, e)=> acum + e.precio, 0)
  productosCarritoCard.innerHTML=""
  arrayProductos.forEach(producto => {
      let div = document.createElement("div")
      div.className = "divCarritoServicio"
      div.innerHTML= `
                      <div class="card" style="width: 10rem;">
                      <img class="card-img-top" src="./${producto.imagen}" alt="imagen de ${producto.nombre}">
                      <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">te estas llevando 1 ${producto.nombre}. a - $${producto.precio}</p>
                      </div>
                      </div>`
                      productosCarritoCard.appendChild(div)
  });
  precioFinalCarrito()
}

function agregarPantalon(){
  arrayProductos.push(pantalon)
  precioTotal = arrayProductos.reduce((acum, e)=> acum + e.precio, 0)
  productosCarritoCard.innerHTML=""
  arrayProductos.forEach(producto => {
      let div = document.createElement("div")
      div.className = "divCarritoServicio"
      div.innerHTML=`
                      <div class="card" style="width: 10rem;">
                      <img class="card-img-top" src="./${producto.imagen}" alt="imagen de ${producto.nombre}">
                      <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">te estas llevando 1 ${producto.nombre}. a - $${producto.precio}</p>
                      </div>
                      </div>`
                      productosCarritoCard.appendChild(div)
  });
  precioFinalCarrito()
}

function agregarBuzo(){
  arrayProductos.push(buzo);
  precioTotal = arrayProductos.reduce((acum, e)=> acum + e.precio, 0)
  productosCarritoCard.innerHTML=""
  arrayProductos.forEach(producto => {
      let div = document.createElement("div")
      div.className = "divCarritoServicio"
      div.innerHTML= `
                      <div class="card" style="width: 10rem;">
                      <img class="card-img-top" src="./${producto.imagen}" alt="imagen de ${producto.nombre}">
                      <div class="card-body">
                      <h5 class="card-title">${producto.nombre}</h5>
                      <p class="card-text">te estas llevando 1 ${producto.nombre}. a - $${producto.precio}</p>
                      </div>
                      </div>`;
                      productosCarritoCard.appendChild(div)
  });
  precioFinalCarrito()

}

function precioFinalCarrito(){
  total.innerHTML=""
  let div = document.createElement("div")
  div.innerHTML= `<p>$${precioTotal}</p>`
  total.appendChild(div);
  console.log("El precio total a acumulado es de: " + precioTotal)
};

function limpiarCarrito(){
  console.log("vaciaste el carrito");
  productosCarritoCard.innerHTML=""
  arrayProductos = []
  precioTotal=0
  precioFinalCarrito()
}

function finalizarCompra() {
  let total = document.getElementById("total").innerText
  let fecha = new Date().toLocaleDateString()
  localStorage.setItem("compra", "Total: " + total + " - Fecha: " + fecha)
  swal({
    title: "¡Compra Exitosa!",
    text: "¡GRACIAS POR COMPRAR!.",
    icon: "success",
    content: {
      element: "div",
      attributes: {
        innerHTML: "Total a pagar: " + total + "<br>Fecha de la compra: " + fecha
      }
    }
  });
  productosCarritoCard.innerHTML=""
  arrayProductos= []
  precioTotal=0
  precioFinalCarrito()
}