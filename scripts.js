const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");
const list = document.querySelector(".list");

//LET OU CONST É USADO PARA DECLARAR VARIÁVEIS
//LET É USADO QUANDO A VARIÁVEL PODE SER ALTERADA
//CONST É USADO QUANDO A VARIÁVEL NÃO PODE SER ALTERADA

let active = 0;
const total = items.length;
let timer;

function update(direction) {
  document.querySelector(".item.active").classList.remove("active");
  document.querySelector(".dot.active").classList.remove("active");

  if (direction > 0) {
    active = active + 1;
    if (active === total) {
      active = 0;
    }
  } else if (direction < 0) {
    active = active - 1;

    if (active < 0) {
      active = total - 1;
    }
  }

  items[active].classList.add("active");
  dots[active].classList.add("active");

  numberIndicator.textContent = String(active + 1).padStart(2, "0");
}
clearInterval(timer);
timer = setInterval(() => {
  update(-1);
}, 5000);

prevButton.addEventListener("click", () => {
  update(-1);
});
nextButton.addEventListener("click", () => {
  update(1);
});
