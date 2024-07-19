let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSoteados = [];
let numeroMaximo = 10;

function nombreElemento(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
}

function verificarIntento() {

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroSecreto === numeroUsuario) {
        nombreElemento('p', `Acertaste el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {

        if (numeroUsuario > numeroSecreto){
            nombreElemento('p', 'El número secreto es menor');
        } else {
            nombreElemento('p', 'El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();

    }

    return;
}

function limpiarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function numeroSecretoAleatorio() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    
    if (listaNumerosSoteados.length === numeroMaximo){
        nombreElemento('p', 'Ya se sortearon todos los números posibles')
    } else{
        if (listaNumerosSoteados.includes(numeroGenerado)){
            return numeroSecretoAleatorio();
        } else {
            listaNumerosSoteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    nombreElemento('h1', 'Juego del número secreto');
    nombreElemento('.texto__parrafo', `Adivina el número secreto entre 1 y ${numeroMaximo}`);
    numeroSecreto = numeroSecretoAleatorio();
    intentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();




