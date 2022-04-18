const buttonStart = document.querySelector(".button");
const buttonX2 = document.querySelector(".x2");

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

const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];

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
  error.setAttribute("src", "./audio/fallo.mp3");
  error.play();
};

const winSound = () => {
  const win = document.createElement("audio");
  win.setAttribute("src", "./audio/acierto.mp3");
  win.play();
};

const leverSound = () => {
  const lever = document.createElement("audio");
  lever.setAttribute("src", "./audio/lever.mp3");
  lever.play();
};

const credits = (credit) => {
  if (credit <= 0) {
    buttonStart.disabled = true;
    buttonStart.classList.replace("button", "buttonD");
    errorSound();
  }
  if (credit <= 0) {
    buttonBottomLeft.disabled = true;
    buttonBottomLeft.classList.replace("bottom", "bottomD");
    buttonBottomCenter.disabled = true;
    buttonBottomCenter.classList.replace("bottom", "bottomD");
    buttonBottomRight.disabled = true;
    buttonBottomRight.classList.replace("bottom", "bottomD");
  }
};

const imageRandom = (image) => {
  let numberRandom = Math.floor(Math.random() * 7);
  let imageRandom = images[numberRandom];

  image.setAttribute("src", `images/${imageRandom}`);
};

awards(imageLeft, imageCenter, imageRight);

buttonReload.addEventListener("click", () => window.location.reload());

buttonStart.addEventListener("click", () => {
  leverSound();
  imageRandom(imageLeft);
  imageRandom(imageCenter);
  imageRandom(imageRight);

  awards(imageLeft, imageCenter, imageRight);
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});

buttonX2.addEventListener("click", () => {
  leverSound();
  imageRandom(imageLeft);
  imageRandom(imageCenter);
  imageRandom(imageRight);

  awardsX2(imageLeft, imageCenter, imageRight);
  credit -= 2;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});

buttonBottomLeft.addEventListener("click", () => {
  advanceLowerButtons(imageLeft);
});

buttonBottomCenter.addEventListener("click", () => {
  advanceLowerButtons(imageCenter);
});

buttonBottomRight.addEventListener("click", () => {
  advanceLowerButtons(imageRight);
});
