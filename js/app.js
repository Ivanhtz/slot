const buttonStart = document.querySelector(".button");

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const modalParagraph = document.querySelector(".modal__paragraph");

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

const showModal = () => {
  modal.classList.add("modal--show");
  winSound();
  closeModal.addEventListener("click", (e) => {
    e.preventDefault;
    modal.classList.remove("modal--show");
  });
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
  }
  if (credit <= 0) {
    buttonBottomCenter.disabled = true;
    buttonBottomCenter.classList.replace("bottom", "bottomD");
  }
  if (credit <= 0) {
    buttonBottomRight.disabled = true;
    buttonBottomRight.classList.replace("bottom", "bottomD");
  }
};

const imageRandom = (image) => {
  let numberRandom = Math.floor(Math.random() * 7);
  let imageRandom = images[numberRandom];

  image.setAttribute("src", `images/${imageRandom}`);
};

const awards = (imageLeft, imageCenter, imageRight) => {
  const imageSrcLeft = imageLeft.attributes.src.textContent;
  const imageSrcCenter = imageCenter.attributes.src.textContent;
  const imageSrcRight = imageRight.attributes.src.textContent;
  const sun = "images/1.png";
  const women = "images/2.png";
  const diamond = "images/3.png";
  const toad = "images/4.png";
  const heart = "images/5.png";
  const moon = "images/6.png";
  const star = "images/7.png";

  if (imageSrcLeft === sun) {
    if (imageSrcCenter === sun) {
      if (imageSrcRight === sun) {
        modalParagraph.textContent = "You have won a prize of 5 credits";
        showModal();
        credit += 5;
      }
    }
  }

  if (imageSrcLeft === women) {
    if (imageSrcCenter === women) {
      if (imageSrcRight === women) {
        modalParagraph.textContent = "You have won a prize of 10 credits";
        showModal();
        credit += 10;
      }
    }
  }

  if (imageSrcLeft === diamond) {
    if (imageSrcCenter === diamond) {
      if (imageSrcRight === diamond) {
        modalParagraph.textContent = "You have won a prize of 15 credits";
        showModal();
        credit += 15;
      }
    }
  }

  if (imageSrcLeft === toad) {
    if (imageSrcCenter === toad) {
      if (imageSrcRight === toad) {
        modalParagraph.textContent = "You have won a prize of 20 credits";
        showModal();
        credit += 20;
      }
    }
  }

  if (imageSrcLeft === heart) {
    if (imageSrcCenter === heart) {
      if (imageSrcRight === heart) {
        modalParagraph.textContent = "You have won a prize of 25 credits";
        showModal();
        credit += 25;
      }
    }
  }

  if (imageSrcLeft === moon) {
    if (imageSrcCenter === moon) {
      if (imageSrcRight === moon) {
        modalParagraph.textContent = "You have won a prize of 30 credits";
        showModal();
        credit += 30;
      }
    }
  }

  if (imageSrcLeft === star) {
    if (imageSrcCenter === star) {
      if (imageSrcRight === star) {
        modalParagraph.textContent = "You have won a prize of 35 credits";
        showModal();
        credit += 35;
      }
    }
  }
};

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

buttonBottomLeft.addEventListener("click", () => {
  leverSound();
  imageRandom(imageLeft);
  awards(imageLeft, imageCenter, imageRight);
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});

buttonBottomCenter.addEventListener("click", () => {
  leverSound();
  imageRandom(imageCenter);
  awards(imageLeft, imageCenter, imageRight);
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});

buttonBottomRight.addEventListener("click", () => {
  leverSound();
  imageRandom(imageRight);
  awards(imageLeft, imageCenter, imageRight);
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});
