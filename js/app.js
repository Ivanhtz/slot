const buttonStart = document.querySelector(".button");
const buttonX2 = document.querySelector(".x2");

const slot = document.querySelector(".slot");
const paragraph = document.createElement("p");
paragraph.textContent = "ADVANCE X 2";
paragraph.classList.add("textAdvance");

const numberThrow = 12;
let randomThrow = 0;
let stop = 0;

const showModal = (cred) => {
  let credi = cred;
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector(".modal__close");
  const modalParagraph = document.querySelector(".modal__paragraph");
  modalParagraph.textContent = `You have won a prize of ${credi} credits`;
  modal.classList.add("modal--show");
  winSound();
  closeModal.addEventListener("click", (e) => {
    e.preventDefault;
    modal.classList.remove("modal--show");
  });

  credit += credi;
};

const buttonReload = document.querySelector(".gold");

let credit = 10;

let imageLeft = document.createElement("img");
imageLeft.setAttribute("src", "images/inicio.png");

let imageCenter = document.createElement("img");
imageCenter.setAttribute("src", "images/inicio.png");

let imageRight = document.createElement("img");
imageRight.setAttribute("src", "images/inicio.png");

const figureLeft = document.querySelector(".figureLeft");
figureLeft.appendChild(imageLeft);
const figureCenter = document.querySelector(".figureCenter");
figureCenter.appendChild(imageCenter);
const figureRight = document.querySelector(".figureRight");
figureRight.appendChild(imageRight);

const buttonBottomLeft = document.querySelector(".bottomLeft");
const buttonBottomCenter = document.querySelector(".bottomCenter");
const buttonBottomRight = document.querySelector(".bottomRight");

const coin = document.querySelector(".coin");
coin.textContent = `Credits: ${credit}`;

const advanceLowerButtons = (image) => {
  leverSound();
  imageRandom(image);
  awards(imageLeft, imageCenter, imageRight);
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
};

const errorSound = () => {
  const error = document.createElement("audio");
  error.setAttribute("src", "./audio/error.mp3");
  error.play();
};

const winSound = () => {
  const win = document.createElement("audio");
  win.setAttribute("src", "./audio/success.mp3");
  win.play();
};

const leverSound = () => {
  const lever = document.createElement("audio");
  lever.setAttribute("src", "./audio/lever.mp3");
  lever.play();
};

const credits = (credit) => {
  if (credit > 0) {
    return;
  } else {
    buttonStart.disabled = true;
    buttonStart.classList.replace("button", "buttonD");
    errorSound();

    buttonX2.disabled = true;
    buttonX2.classList.replace("x2", "buttonDx2");
    buttonBottomLeft.disabled = true;
    buttonBottomLeft.classList.replace("bottom", "bottomD");
    buttonBottomCenter.disabled = true;
    buttonBottomCenter.classList.replace("bottom", "bottomD");
    buttonBottomRight.disabled = true;
    buttonBottomRight.classList.replace("bottom", "bottomD");
  }
};

const imageRandom = (image) => {
  let numberRandom = Math.floor(Math.random() * (7 + 1 - 1) + 1);

  image.setAttribute("src", `images/${numberRandom}.png`);
};

const advance = () => {
  if (numberThrow == randomThrow) {
    slot.appendChild(paragraph);
    buttonBottomLeft.disabled = false;
    buttonBottomCenter.disabled = false;
    buttonBottomRight.disabled = false;
  }
};

const noAdvance = () => {
  if (stop > 1) {
    slot.removeChild(paragraph);
    buttonBottomLeft.disabled = true;
    buttonBottomCenter.disabled = true;
    buttonBottomRight.disabled = true;

    stop = 0;
  }
};

awards(imageLeft, imageCenter, imageRight);

buttonReload.addEventListener("click", () => window.location.reload());

buttonStart.addEventListener("click", () => {
  randomThrow = Math.floor(Math.random() * (12 + 1 - 1) + 1);

  leverSound();
  imageRandom(imageLeft);
  imageRandom(imageCenter);
  imageRandom(imageRight);

  awards(imageLeft, imageCenter, imageRight);
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
  advance(randomThrow);
});

buttonX2.addEventListener("click", () => {
  randomThrow = Math.floor(Math.random() * (12 + 1 - 1) + 1);

  leverSound();
  imageRandom(imageLeft);
  imageRandom(imageCenter);
  imageRandom(imageRight);

  awards(imageLeft, imageCenter, imageRight, 2);
  credit -= 2;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
  advance(randomThrow);
});

buttonBottomLeft.addEventListener("click", () => {
  stop += 1;
  advanceLowerButtons(imageLeft);
  noAdvance();
});

buttonBottomCenter.addEventListener("click", () => {
  stop += 1;
  advanceLowerButtons(imageCenter);
  noAdvance();
});

buttonBottomRight.addEventListener("click", () => {
  stop += 1;
  advanceLowerButtons(imageRight);
  noAdvance();
});
