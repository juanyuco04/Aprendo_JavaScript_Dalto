let free = false;

const validarCliente = (time)=>{
    let edad = prompt("¿cual es tu edad?");
    if (edad > 18){
        if (time >= 2 && time < 7 && free == false) {
            alert("Tendras la entrada gratis")
            free = true;
        } else {
            alert("podes pasar, pero tendras que pagar la entrada")
        }

    } else {
        alert("hey chico, lastimosamente eres un nene, ¡no podras dentrar!");
    }
}
 validarCliente (11)
 validarCliente (2)
 validarCliente (12)
 validarCliente (5)
 validarCliente (9)
 validarCliente (10)
