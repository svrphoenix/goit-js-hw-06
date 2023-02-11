const inputRef = document.querySelector("#name-input");
const nameSpanRef = document.querySelector("#name-output");
const initalInputValue = nameSpanRef.textContent;

const onInputChange = event => {
  nameSpanRef.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    nameSpanRef.textContent = initalInputValue;
  }
};

inputRef.addEventListener("input", onInputChange);