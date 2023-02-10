const inputRef = document.querySelector("#name-input");
const nameSpanRef = document.querySelector("#name-output");

  const onInputChange = event => {
    nameSpanRef.textContent = event.currentTarget.value.trim();
  };

inputRef.addEventListener("input", onInputChange);


