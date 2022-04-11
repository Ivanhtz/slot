export const awards = (imageLeft, imageCenter, imageRight) => {
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
