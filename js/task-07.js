const fontRangeRef = document.querySelector('#font-size-control');

const onRangeInput = (event) => {
  document.querySelector('#text').style.fontSize = event.target.value + 'px';
};

fontRangeRef.addEventListener('input', onRangeInput);
