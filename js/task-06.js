const inputRef = document.querySelector('#validation-input');

const onInputBlur = event => {
  const isCorrectLength =
    event.target.value.trim().length ===
    Number(event.target.dataset.length);
  isCorrectLength
    ? (event.target.className = 'valid')
    : (event.target.className = 'invalid');
};

inputRef.addEventListener('blur', onInputBlur);