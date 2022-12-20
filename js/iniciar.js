function iniciar() {
  movimientos = 0;
  reparteTarjetas(niveles[nivelActual].tarjetas);
  document.querySelector("#mov").innerText = "00";
  maxContador();
  document.querySelector(".selecciona-nivel").classList.remove("visible");
  document.querySelector("#endGame").classList.remove("visible");
  document.querySelector("#timeOver").classList.remove("visible");
  document.querySelector("#gameOver").classList.remove("visible");
  document.querySelector("#subeNivel").classList.remove("visible");

  document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    elemento.addEventListener("click", descubrir);
  });
    
  if (modo === 0 || modo === 2) {
    iniciaCronometro();
  } else {
    document.querySelector("#cronometro").classList.add("cronometro-oculto");
  }
}



function reiniciar() {
    
  nivelActual = 0;
  actualizaNivel();
  iniciar();
}

function iniciaJuegoNormal() {
    modo = 0;

  document.querySelector("#bienvenida").classList.remove("visible");
  iniciar();
  document.querySelector(".control-nivel").classList.add("control-oculto");
}

function iniciaJuegoRelax() {
    modo = 1;
    
  document.querySelector("#bienvenida").classList.remove("visible");
  
  iniciar();
  document.querySelector(".contadores").classList.add("contador-oculto");
}

function iniciaJuegoHard() {
    modo = 2;
    niveles[0].segundos = 5;
    niveles[1].segundos = 8;
    niveles[2].segundos = 15;
    niveles[3].segundos = 18;
    niveles[4].segundos = 24;
    niveles[5].segundos = 30;
    niveles[6].segundos = 35;
    niveles[7].segundos = 40;

    document.querySelector("#bienvenida").classList.remove("visible");
    iniciar();
    document.querySelector(".control-nivel").classList.add("control-oculto");
}
function iniciaJuegoMove() {
    modo = 3;

    document.querySelector("#bienvenida").classList.remove("visible");
    iniciar();
    document.querySelector(".control-nivel").classList.add("control-oculto");
}
