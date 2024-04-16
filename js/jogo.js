const grid = document.querySelector(".grid");

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}
const createCard = () => {
  const card = createElement('div', 'card');
  const front = createElement("div");
  const back = createElement("div");

  card.className = "card";
  front.className = "face front";
  back.className = "face back";

  card.appendChild(front);
  card.appendChild(back);

  grid.appendChild(card);
}

createCard();
