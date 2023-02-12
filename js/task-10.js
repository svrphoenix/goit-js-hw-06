function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const createButtonRef = document.querySelector('button[data-create]');
const destroyButtonRef = document.querySelector('button[data-destroy]');

const onCreateButtonClick = () => {
  const boxesMarkup = createBoxes(Number(document.querySelector('input[type=number').value));
  document.querySelector('#boxes').append(...boxesMarkup);
};

const onDestroyButtonClick = () => {
  document.querySelector('#boxes').innerHTML='';
};


const createBoxes = (amount) => {
  const boxesRef = [];
  let width = 30;
  let height = 30;
  for(let i = 0; i< amount; i += 1) {
    boxesRef[i] = document.createElement('div');
    boxesRef[i].style.width = width + 'px';
    boxesRef[i].style.height = height + 'px';
    boxesRef[i].style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
  }
  return boxesRef;
  }
  

createButtonRef.addEventListener('click', onCreateButtonClick);
destroyButtonRef.addEventListener('click', onDestroyButtonClick);