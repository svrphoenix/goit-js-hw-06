const fontRangeRef = document.querySelector("#font-size-control");

const onRangeInput = (event) => {
  document.querySelector("#text").style.fontSize = event.currentTarget.value + 'px';
};

fontRangeRef.addEventListener("input", onRangeInput);
