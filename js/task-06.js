const inputRef = document.querySelector("#validation-input");

const onInputBlur = event => {
  const isCorrectLength =
    event.currentTarget.value.trim().length ===
    Number(event.currentTarget.dataset.length);
  isCorrectLength
    ? (event.currentTarget.className = "valid")
    : (event.currentTarget.className = "invalid");
};

inputRef.addEventListener("blur", onInputBlur);