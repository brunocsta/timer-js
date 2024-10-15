//Função que vai resolver o problema do formato de horas

function construirSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

const relogio = document.querySelector(".relogio");
const container = document.querySelector(".container");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

iniciar.addEventListener("click", function (event) {
  iniciarCronometro();
});
zerar.addEventListener("click", function (event) {});
pausar.addEventListener("click", function (event) {
  pausarCronometro();
});

let segundos = 0;
let minutos = 0;
let hora = 0;

//A função construirSegundos permitiu simplificar a função iniciarCronometro, agora uso ela para formatar o cronometro e esta apenas irá iniciar a contagem6
function iniciarCronometro() {
  const intervalo = setInterval(() => {
    segundos++;
    relogio.innerHTML = construirSegundos(segundos);
  }, 1000);
}

function pausarCronometro() {
  setTimeout(() => {
    clearInterval(intervalo);
  });
}
