const grid = document.querySelector(".grid");

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
const revealCard = ({ target }) => {
  if (target.parentNode.className.includes("reveal-card")) {
    return;
  }

  if(firstCard === ''){
    target.parentNode.classList.add("reveal-card");
    firstCard = target.parentNode;
  }else if (secondCard ===''){
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

loadGame();
