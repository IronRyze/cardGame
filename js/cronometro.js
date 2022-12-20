function iniciaCronometro() {
  var segundo = niveles[nivelActual].segundos + 1;
  var minutos = 0;
  var segundosTexto;
  var minutosTexto;

  function actualizaContador() {
    segundo--;
    if (segundo < 0) {
      segundo = 59;
      minutos--;
    }
    if (minutos < 0) {
      segundo = 0;
      minutos = 0;
      clearInterval(cronometro);
      timeOver();
    }
    segundosTexto = segundo;
    minutosTexto = minutos;
    if (segundo < 10) {
      segundosTexto = "0" + segundo;
    }
    if (minutos < 10) {
      minutosTexto = "0" + minutos;
    }
    document.querySelector("#minutos").innerText = minutosTexto;
    document.querySelector("#segundos").innerText = segundosTexto;
  }
  clearInterval(cronometro);
  cronometro = setInterval(actualizaContador, 1000);
}
