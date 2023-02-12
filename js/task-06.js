const inputRef = document.querySelector('#validation-input');

const onInputBlur = event => {
  const isCorrectLength =
    event.target.value.trim().length ===
    Number(event.target.dataset.length);
  
  event.target.className = isCorrectLength ? 'valid' : 'invalid';
  };

inputRef.addEventListener('blur', onInputBlur);