var modo = 0
var movimientos = 0;
var cronometro;
var grupoTarjetas = [
  ["🦄", "🍦"],
  ["🌈", "👽"],
  ["👾", "🤖", "👹", "👺"],
  ["🤡", "💩", "🎃", "🙀"],
  ["☠️", "👾", "😽", "😼"],
  ["🍕", "🍔", "🍟", "🌭"],
  ["🍖", "🍗", "🥩", "🍠"],
  ["🍘", "🍙", "🍚", "🍛"]
];


var segundos = 0;
var nivelActual = 0;

    
var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3,
    segundos: 10
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 8,
    segundos: 15
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1], 
      grupoTarjetas[2]
    ),
    movimientosMax: 12,
    segundos: 25
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3]
    ),
    movimientosMax: 25,
    segundos: 35
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 60,
    segundos: 45
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4],
      grupoTarjetas[5]
    ),
    movimientosMax: 90,
    segundos: 60
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4],
      grupoTarjetas[5],
      grupoTarjetas[6]
    ),
    movimientosMax: 120,
    segundos: 70
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4],
      grupoTarjetas[5],
      grupoTarjetas[6],
      grupoTarjetas[7]
    ),
    movimientosMax: 150,
    segundos: 80
  }
];
