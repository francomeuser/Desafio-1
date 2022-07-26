class Tour {
    constructor(nombre = "",id = "", precio = "Consultar precio") {       
        this.nombre = nombre
        this.id = id
        this.precio = parseFloat(precio)

    }
}

const tour1 = new Tour ("playa","01",10000)
const tour2 = new Tour ("montaña","02",14000)


if(isNaN(tour1.precio)) { //Devuelve Verdadero si no es un numero
    alert("Debe ingresar un numero")
} 
else {
        if(tour1.precio < 0) { //Si el precio es nro negativo, alertame.
        alert("El precio debe ser mayor a cero") 
    } 
    else {
    console.log ("$" + tour1.precio)
    }
}


let respuesta = prompt("Desea contratar alguno de nuestros tours? Si/No").toLowerCase()
let destino

if(respuesta !== "si" && respuesta !== "no"){
    alert("Opcion no valida")
} else {
    if(respuesta == "si"){
        let destino = prompt("¿Donde desea ir: playa o montaña?").toLowerCase()
        if(destino != "playa" && destino != "montaña"){
            alert("Opcion incorrecta. Debe ingresar una de las siguientes opciones: playa o montaña")
        } else { 
            switch(destino){
                case("playa"):
                console.log(tour1)
                alert("Nuestro viaje a la playa tiene un costo de $" + tour1.precio + ".")
                break
                
                case("montaña"):
                console.log(tour2)
                alert("Nuestro viaje a las montañas tiene un costo de $" + tour2.precio + ".")
                break
            }console.log (destino)
            let respuestaFinanciacion = prompt("¿Desea abonar en cuotas? Si/No").toLowerCase()
            if(respuestaFinanciacion !== "si" && respuestaFinanciacion !== "no"){
                alert("Opcion no valida")
            } else {
                console.log (respuestaFinanciacion)
            }
            
            let valorCuota
            let cuota
            
            if(respuestaFinanciacion === "si"){
                let cuotas = prompt ("Usted puede abonar en 3 o 6 cuotas sin interes. Por favor indique cantidad de cuotas deseadas:")
                if(cuotas !== "3" && cuotas !== "6"){
                    console.log("Opcion no valida")}
                else { 
                    switch (cuotas) {
                        case ("3"):
                        if(destino === "playa"){
                            valorCuota = tour1.precio /= 3
                            alert ("El valor de cada cuota sera $" + valorCuota)
                        }
                        /* else 
                        valorCuota = tour2.precio /=3
                        alert ("El valor de cada cuota sera $" + valorCuota)*/
                        break
            
                        case ("6"):
                        if(destino === "playa"){
                            valorCuota = tour1.precio /= 6
                            alert ("El valor de cada cuota sera $" + valorCuota)
                        }
                        /*else 
                        valorCuota = tour2.precio /=6
                        alert ("El valor de cada cuota sera $" + valorCuota)*/
                        break
                    }
                }   
            }
            
            if(respuestaFinanciacion === "no") {
                switch (destino){
                case ("playa"): 
                alert ("Debe abonar $" + tour1.precio)
                break   
                
                case ("montaña"):
                alert ("Debe abonar $" + tour2.precio)
                break 
                }
            }


        }
    } else {alert ("Muchas gracias por visitar nuestra pagina.")}
}


