// HTML
const buttonStart = document.querySelector(".button");

let credit = 10;

const images = ["1.png", "2.png", "3.png", "4.png", "5.png"];

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
const credits = (credit) => {
  if (credit <= 0) {
    buttonStart.disabled = true;
    buttonStart.classList.replace("button", "buttonD");
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
  let numberRandom = Math.floor(Math.random() * 5);
  let imageRandom = images[numberRandom];

  image.setAttribute("src", `images/${imageRandom}`);
};

// Events
buttonStart.addEventListener("click", () => {
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);

  imageRandom(image1);
  imageRandom(image2);
  imageRandom(image3);
});

buttonBottomLeft.addEventListener("click", () => {
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
  imageRandom(image1);
});

buttonBottomCenter.addEventListener("click", () => {
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
  imageRandom(image2);
});

buttonBottomRight.addEventListener("click", () => {
  credit -= 1;
  coin.textContent = `Credits: ${credit} $`;
  credits(credit);
  imageRandom(image3);
});

console.log();
