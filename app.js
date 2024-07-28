let numeroSecreto = 0;
let intentos = 0;
let ListaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
      if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {  
        // cuando el usuario no acertó el número secreto.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else { 
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
   }
   return;
}

function limpiarCaja() { 
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random ()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(ListaNumerosSorteados);

    //si, ya sorteamos todos los numeros 
    if(ListaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','ya se sortearon todos los números posibles');

    }else{
         //si el número generado está incluido en la lista
        if (ListaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            ListaNumerosSorteados.push(numeroGenerado);
            return(numeroGenerado);
        }
    }
}    

function condicionesIniciales() {
    asignarTextoElemento ('h1','Juego del número secreto');
    asignarTextoElemento ('p',`Selecciona  un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    //generar el nuevo numero aleatorio
    //Deshabilitar el botón de Juego nuevo
    condicionesIniciales();
    // inicializar el número de intentos
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();