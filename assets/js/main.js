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
  clearInterval(intervalo);
  iniciarCronometro();
});
zerar.addEventListener("click", function (event) {
  clearInterval(intervalo);
  relogio.innerHTML = "00:00:00";
  segundos = 0;
});
pausar.addEventListener("click", function (event) {
  clearInterval(intervalo);
  relogio.classList.add("pausado");
});

let segundos = 0;
let intervalo;

//A função construirSegundos permitiu simplificar a função iniciarCronometro, agora uso ela para formatar o cronometro e esta apenas irá iniciar a contagem6
function iniciarCronometro() {
  intervalo = setInterval(() => {
    segundos++;
    relogio.innerHTML = construirSegundos(segundos);
  }, 1000);
}

