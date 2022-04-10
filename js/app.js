// HTML
const buttonStart = document.querySelector(".button");

const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__close");
const modalParagraph = document.querySelector(".modal__paragraph");

const buttonReload = document.querySelector(".gold");

let credit = 10;

const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];

let image1 = document.createElement("img");
image1.setAttribute("src", "images/inicio.png");

let image2 = document.createElement("img");
image2.setAttribute("src", "images/inicio.png");

let image3 = document.createElement("img");
image3.setAttribute("src", "images/inicio.png");

const figure1 = document.querySelector(".figure1");
figure1.appendChild(image1);
const figure2 = document.querySelector(".figure2");
figure2.appendChild(image2);
const figure3 = document.querySelector(".figure3");
figure3.appendChild(image3);

const buttonBottomLeft = document.querySelector(".bottom1");
const buttonBottomCenter = document.querySelector(".bottom2");
const buttonBottomRight = document.querySelector(".bottom3");

const coin = document.querySelector(".coin");

// Functions

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

const awards = (image1, image2, image3) => {
  const imageSrc1 = image1.attributes.src.textContent;
  const imageSrc2 = image2.attributes.src.textContent;
  const imageSrc3 = image3.attributes.src.textContent;
  const im1 = "images/1.png";
  const im2 = "images/2.png";
  const im3 = "images/3.png";
  const im4 = "images/4.png";
  const im5 = "images/5.png";
  const im6 = "images/6.png";
  const im7 = "images/7.png";

  if (imageSrc1 === im1) {
    if (imageSrc2 === im1) {
      if (imageSrc3 === im1) {
        modalParagraph.textContent = "Has ganado un premio de 5 créditos";
        showModal();
        credit += 5;
      }
    }
  }

  if (imageSrc1 === im2) {
    if (imageSrc2 === im2) {
      if (imageSrc3 === im2) {
        modalParagraph.textContent = "Has ganado un premio de 10 créditos";
        showModal();
        credit += 10;
      }
    }
  }

  if (imageSrc1 === im3) {
    if (imageSrc2 === im3) {
      if (imageSrc3 === im3) {
        modalParagraph.textContent = "Has ganado un premio de 15 créditos";
        showModal();
        credit += 15;
      }
    }
  }

  if (imageSrc1 === im4) {
    if (imageSrc2 === im4) {
      if (imageSrc3 === im4) {
        modalParagraph.textContent = "Has ganado un premio de 20 créditos";
        showModal();
        credit += 20;
      }
    }
  }

  if (imageSrc1 === im5) {
    if (imageSrc2 === im5) {
      if (imageSrc3 === im5) {
        modalParagraph.textContent = "Has ganado un premio de 25 créditos";
        showModal();
        credit += 25;
      }
    }
  }

  if (imageSrc1 === im6) {
    if (imageSrc2 === im6) {
      if (imageSrc3 === im6) {
        modalParagraph.textContent = "Has ganado un premio de 30 créditos";
        showModal();
        credit += 30;
      }
    }
  }

  if (imageSrc1 === im7) {
    if (imageSrc2 === im7) {
      if (imageSrc3 === im7) {
        modalParagraph.textContent = "Has ganado un premio de 35 créditos";
        showModal();
        credit += 35;
      }
    }
  }
};

// Events

buttonReload.addEventListener("click", () => window.location.reload());

buttonStart.addEventListener("click", () => {
  leverSound();
  imageRandom(image1);
  imageRandom(image2);
  imageRandom(image3);

  awards(image1, image2, image3);
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});

buttonBottomLeft.addEventListener("click", () => {
  leverSound();
  imageRandom(image1);
  awards(image1, image2, image3);
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});

buttonBottomCenter.addEventListener("click", () => {
  leverSound();
  imageRandom(image2);
  awards(image1, image2, image3);
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});

buttonBottomRight.addEventListener("click", () => {
  leverSound();
  imageRandom(image3);
  awards(image1, image2, image3);
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
});
