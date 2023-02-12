function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorButtonRef = document.querySelector('.change-color');

const onCnageColorButtonClick = () => {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  document.querySelector('.color').textContent = backgroundColor;
};

changeColorButtonRef.addEventListener('click', onCnageColorButtonClick);