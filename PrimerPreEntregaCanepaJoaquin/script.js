function descuento (precio,descuento)
{
    let precioFinal;
    let precioDescuento;
    precioDescuento=precio*descuento;
    precioFinal=precio-precioDescuento;
    return precioFinal
}

let opcionPrenda;
let resupuesta;
let presupuestoRemera=0;
let precioRemera=7000;
let contadorRemeras=0;
let presupuestoPantalon=0;
let precioPantalon=14000
let contadorPantalon=0;
let presupuestoBuzo=0;
let preciotoBuzo=15000;
let contadorBuzo=0;
let precioFinal=0;
let precioFinalDescuento=0;

presupuestoRemera=parseInt(presupuestoRemera)
precioRemera=parseInt(precioRemera)

do{
    do{
        opcionPrenda=prompt("Ingrese que prenda desea comprar (remera | buzo | pantalon)");
        switch(opcionPrenda)
        {
            case "remera":
                alert("compro Remera")
                presupuestoRemera=presupuestoRemera+precioRemera;
                contadorRemeras++
                break;
            case "buzo":
                alert("compro buzo")
                presupuestoBuzo=presupuestoBuzo+preciotoBuzo;
                contadorBuzo++
                break;
            case "pantalon":
                alert("compro pantalon")
                presupuestoPantalon=presupuestoPantalon+precioPantalon;
                contadorPantalon++;
                break;
            /*default:
                opcionPrenda=prompt("por favor ingrese un tipo valido")
                break;*/
        }
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

alert("El precio total es de $ "+ precioFinal);

if(contadorBuzo>0 && contadorPantalon>0 && contadorRemeras>0)
{
    precioFinalDescuento=descuento(precioFinal,0.5);
    alert("El precio total con descuento es de $ "+ precioFinalDescuento);
}