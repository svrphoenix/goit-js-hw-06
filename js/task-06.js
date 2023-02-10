const inputRef = document.querySelector("#validation-input");

const onInputBlur = event => {
  const isCorrectLength =
    event.currentTarget.value.trim().length === Number(inputRef.dataset.length);
  isCorrectLength
    ? inputRef.className = "valid"
    : inputRef.className = "invalid";
};

inputRef.addEventListener("blur", onInputBlur);