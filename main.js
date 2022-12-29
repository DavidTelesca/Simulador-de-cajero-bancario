let nombreUsuario = prompt("Ingrese su nombre de usuario");
let passwordUsuario = parseInt(prompt("Ingrese su contraseña. Dispone de 3 intentos"));

const nombreAutorizado = "DavidTelesca";
const passwordAutorizado = 2345;

for (i = 0; i < 3; i++) {
    if (passwordUsuario === passwordAutorizado && nombreUsuario === nombreAutorizado) {
        alert("Datos correctos. Comienze a operar");
        menu()
        break;
    } else if (i < 2) {
        alert("Usuario o contraseña incorrecta. Por favor vuelva a intentar")
        nombreUsuario = prompt("Ingrese su nombre de usuario")
        passwordUsuario = parseInt(prompt("Ingrese su contraseña"));
        if (passwordUsuario === passwordAutorizado && nombreUsuario === nombreAutorizado) {
            alert("Datos correctos. Comienze a operar");
            menu()
            break;
        }
    } else if (i === 2) {
        alert("Usuario bloqueado por intentos fallidos")
    }
}
function menu () {

    let valorElegido = prompt("Usted posee un total de $50.000 en su cuenta. Seleccione el tipo de operacion a realizar \n1) Extraccion de dinero \n2) Deposito de dinero.")
    

if (valorElegido === "1") {
    let opcionUno = prompt("\n1) $2000 \n2) $10.000 \n3) $30.000")

    switch (opcionUno) {
        case "1":
        alert("Usted realizo la extraccion exitosamente. \nExtraccion de $2000, el dinero disponible actualmente en su cuenta es de $48.000");
        
    break;
        case "2":
        alert("Usted realizo la extraccion exitosamente. \nExtraccion de $10.000, el dinero disponible actualmente en su cuenta es de $40.000");
    break;
        case "3":
        alert("Usted realizo la extraccion exitosamente. \nExtraccion de $30.000, el dinero disponible actualmente en su cuenta es de $20.000");
    break;
    default:
    alert("Datos erroneos.Ingrese un valor correcto")
    } 


    } else if (valorElegido === "2") {
    let opcionDos = prompt("\n1)Depositar $2000 \n2) Depositar $5000 \n3) Depositar $10.000")
    switch (opcionDos) {
        case "1":
            alert("Operacion exitosa. Usted deposito $2000 en su cuenta. \nEl dinero total disponible es de $52.000")
            break;
        case "2":
            alert("Operacion exitosa. Usted deposito $5000 en su cuenta. \nEl dinero total disponible es de $55.000")   
            break;
        case "3":
            alert("Operacion exitosa. Usted deposito $10.000 en su cuenta. \nEl dinero disponible es de $60.000")
            break;
            default:
                alert("Datos erroneos.Ingrese un valor correcto")
            }
    }
    
}



