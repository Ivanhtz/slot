const awards = (imageLeft, imageCenter, imageRight, number = 1) => {
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

  if (imageSrcLeft === sun && imageSrcCenter === sun && imageSrcRight === sun) {
    showModal(5 * number);
  }

  if (
    imageSrcLeft === women &&
    imageSrcCenter === women &&
    imageSrcRight === women
  ) {
    showModal(10 * number);
  }

  if (
    imageSrcLeft === diamond &&
    imageSrcCenter === diamond &&
    imageSrcRight === diamond
  ) {
    showModal(15 * number);
  }

  if (
    imageSrcLeft === toad &&
    imageSrcCenter === toad &&
    imageSrcRight === toad
  ) {
    showModal(20 * number);
  }

  if (
    imageSrcLeft === heart &&
    imageSrcCenter === heart &&
    imageSrcRight === heart
  ) {
    showModal(25 * number);
  }

  if (
    imageSrcLeft === moon &&
    imageSrcCenter === moon &&
    imageSrcRight === moon
  ) {
    showModal(30 * number);
  }

  if (
    imageSrcLeft === star &&
    imageSrcCenter === star &&
    imageSrcRight === star
  ) {
    showModal(35 * number);
  }
};
