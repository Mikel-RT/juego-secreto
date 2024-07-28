//mensaje de bienvenida
alert ('bienvenido al juego del número secreto');
//variables 
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
// floor quita los decimales a un numero para dejarnos el numero entero
//la cantidad de intentos pre establecida se ve reemaplazada por math, quien elige el numero en un rango (*10)lo que significa del 1 y 10 de manera aleatoria
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'intento';
let maximoIntentos = 3;

//la funcion console.log guarda el valor de las variables en la ventana Console de los exploradores.
console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) { 
   numeroUsuario = parseInt(prompt (`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor`));

    console.log(typeof(numeroUsuario));
    /* 
    este código realiza la comparación
    */
    if (numeroUsuario == numeroSecreto) {
            //Acertamos, fue verdadera la condición
        alert(`Acertaste, el numero secreto es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
            /*el símbolo ${intentos==1} corresponde a una mejora en reemplazo de la variable "Let palabraVeces" y la condición mismo dentro de Else; 
            ? = compara
            : = de lo contrario
            */
    } else {
        //alertas de apoyo al jugador
        if (numeroUsuario > numeroSecreto){
            alert ('el número secreto es menor');
        } else { 
            alert ('el número secreto es mayor');
            }
            //incrementamos el contador cuando no acierte
            //intentos = intentos + 1;
            //intentos += 1;
            intentos ++; //este contador es el mas usado en la programación, sin embargo los anteriores siguen siendo igual de válidos.

            //palabraVeces = 'intentos';
            if(intentos > maximoIntentos ) {
                alert(`llegaste al número máximo de ${maximoIntentos} intentos`);
                break;
            }
            //la condicion no se cumplió
            //alert('Lo siento, no acertaste el número');
    }
}
