let counterValue = 0;
const decrementButton = document.querySelector("button[data-action='decrement']");
const incrementButton = document.querySelector("button[data-action='increment']");

const changeSpanValue = (value) =>
  (document.querySelector("#value").textContent = value);

const onDecrementButtonClick = () => { 
  counterValue -= 1;
  changeSpanValue(counterValue);
}

const onIncrementButtonClick = () => {
  counterValue += 1;
  changeSpanValue(counterValue);
};

decrementButton.addEventListener("click", onDecrementButtonClick);
incrementButton.addEventListener("click", onIncrementButtonClick);