function validarNumeros(num, mensaje){
    try{
        if(isNaN(num)){ // si num Is Not A Number (si num no es numero)...
            throw "Escriba un número " + mensaje;
        }
    } catch(err) {
        alert(err);
    }
}
    
function validarLetras(cadena, mensaje){
    var az = /^[a-zA-Z]+$/;
    if(!az.test(cadena) && !cadena === "") {
        alert("Escriba solo letras " + mensaje);
    }
}
    
function validarLongitud(num, longitudmax, mensaje){
    if(num.length>longitudmax) {
        alert("Escriba una cantidad con una longitud máxima de " + longitudmax + " dígitos " + mensaje);
    }
}

function validarInyeccionSQL(cadena, mensaje){
    if(cadena.includes("'")){
        alert(mensaje+" no puede contener el caracter '");
    }
}