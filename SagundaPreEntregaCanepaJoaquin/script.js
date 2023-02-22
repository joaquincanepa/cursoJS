function descuento (precio,descuento)
{
    let precioFinal;
    let precioDescuento;
    precioDescuento=precio*descuento;
    precioFinal=precio-precioDescuento;
    return precioFinal
}


const prenda=[
    {nombre: "remera" ,precio: 7000},
    {nombre: "pantalon", precio: 14000},
    {nombre: "buzo", precio:15000}
];
let arrayCarrito=[];

let opcionPrenda;
let resupuesta;
let presupuestoRemera=0;
let contadorRemeras=0;
let presupuestoPantalon=0;
let contadorPantalon=0;
let presupuestoBuzo=0;
let contadorBuzo=0;
let precioFinal=0;
let precioFinalDescuento=0;

do{
    do{
        alert("Nuestras prendas disponibles por el momento son: ")
        let prendas =  prenda.map (
            (prenda) => prenda.nombre + " " +  prenda.precio + " pesos");
        alert(prendas.join(" | "));
        opcionPrenda=prompt("Ingrese que prenda desea comprar (remera | buzo | pantalon)");
        switch(opcionPrenda)
        {
            case "remera":
                alert("compro Remera")
                precio=7000;
                presupuestoRemera=presupuestoRemera+precio;
                contadorRemeras++
                arrayCarrito.push({opcionPrenda, contadorRemeras, precio})
                break;
            case "buzo":
                alert("compro buzo")
                precio=14000;
                presupuestoBuzo=presupuestoBuzo+precio;
                contadorBuzo++
                arrayCarrito.push({opcionPrenda, contadorBuzo, precio})
                break;
            case "pantalon":
                alert("compro pantalon")
                precio=15000;
                presupuestoPantalon=presupuestoPantalon+precio;
                contadorPantalon++;
                arrayCarrito.push({opcionPrenda, contadorPantalon, precio})
                break;
        }
        console.log(arrayCarrito)
    }while (opcionPrenda!="remera" && opcionPrenda!="buzo" && opcionPrenda!="pantalon")
    resupuesta=prompt("Desea seguir sumando cosas al carrito?")
}while(resupuesta!="no")
precioFinal=presupuestoBuzo+presupuestoPantalon+presupuestoRemera;

if(presupuestoRemera>0)
{
    alert("El costo total de remeras es de : "+presupuestoRemera+ " y compro "+contadorRemeras+ " remeras");
}
if(presupuestoBuzo>0)
{
    alert("El costo total de buzo es de : "+presupuestoBuzo+ " y compro "+contadorBuzo+ " buzos");
}
if(presupuestoPantalon>0)
{
    alert("El costo total de pantalon es de : "+presupuestoPantalon+ " y compro "+contadorPantalon+ " pantalones");
}

if(contadorBuzo>0 && contadorPantalon>0 && contadorRemeras>0)
{
    precioFinalDescuento=descuento(precioFinal,0.5);
    alert("El precio total con descuento es de $ "+ precioFinalDescuento);
}else
{
    alert("El precio total es de $ "+ precioFinal);
}