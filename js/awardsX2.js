const awardsX2 = (imageLeft, imageCenter, imageRight) => {
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
        showModal(10);
      }
    }
  }

  if (imageSrcLeft === women) {
    if (imageSrcCenter === women) {
      if (imageSrcRight === women) {
        showModal(20);
      }
    }
  }

  if (imageSrcLeft === diamond) {
    if (imageSrcCenter === diamond) {
      if (imageSrcRight === diamond) {
        showModal(30);
      }
    }
  }

  if (imageSrcLeft === toad) {
    if (imageSrcCenter === toad) {
      if (imageSrcRight === toad) {
        showModal(40);
      }
    }
  }

  if (imageSrcLeft === heart) {
    if (imageSrcCenter === heart) {
      if (imageSrcRight === heart) {
        showModal(50);
      }
    }
  }

  if (imageSrcLeft === moon) {
    if (imageSrcCenter === moon) {
      if (imageSrcRight === moon) {
        showModal(60);
      }
    }
  }

  if (imageSrcLeft === star) {
    if (imageSrcCenter === star) {
      if (imageSrcRight === star) {
        showModal(70);
      }
    }
  }
};
