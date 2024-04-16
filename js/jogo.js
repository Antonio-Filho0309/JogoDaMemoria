const grid = document.querySelector(".grid");
const spanPlayer = document.querySelector(".jogador");
const timer = document.querySelector(".timer");

const times = [
  "bahia",
  "CEARA",
  "FORTALEZA",
  "SANTA CRUZ",
  "sport",
  "VITORIA",
  "ferroviario",
  "nautico",
  "crb",
];

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
};

let firstCard = "";
let secondCard = "";

const checkEndGame = () => {
  const disabledCards = document.querySelectorAll(".disabled-card");

  if (disabledCards.length === 18) {
    clearInterval(this.loop);
    window.alert(`Parabéns ${spanPlayer.innerHTML}!!!!!   seu tempo foi: ${timer.innerHTML}`);
  }
};

const checkCards = () => {
  const firstTime = firstCard.getAttribute("data-time");
  const secondTime = secondCard.getAttribute("data-time");

  if (firstTime === secondTime) {
    firstCard.firstChild.classList.add("disabled-card");
    secondCard.firstChild.classList.add("disabled-card");
    firstCard = "";
    secondCard = "";

    checkEndGame();
  } else {
    setTimeout(() => {
      firstCard.classList.remove("reveal-card");
      secondCard.classList.remove("reveal-card");

      firstCard = "";
      secondCard = "";
    }, 500);
  }
};
const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }

  if (firstCard === "") {
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  } else if (secondCard === "") {
    target.parentNode.classList.add("reveal-card");
    secondCard = target.parentNode;

    checkCards();
  }
};

const createCard = (time) => {
  const card = createElement("div", "card");
  const front = createElement("div", "face front");
  const back = createElement("div", "face back");

  front.style.backgroundImage = `url('../IMAGES/${time}.png')`;
  card.appendChild(front);
  card.appendChild(back);

  card.addEventListener("click", revealCard);
  card.setAttribute("data-time", time);

  return card;
};

const loadGame = () => {
  const duplicateTimes = [...times, ...times];

  const embaralharArray = duplicateTimes.sort(() => Math.random() - 0.5);

  embaralharArray.forEach((time) => {
    const card = createCard(time);
    grid.appendChild(card);
  });
};

const startTimer = () => {
  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime +1;
  }, 1000);
};

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem("player");
  startTimer();
  loadGame();
};
