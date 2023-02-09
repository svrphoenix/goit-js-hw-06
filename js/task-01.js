const categoriesItemsRef = document
  .querySelector("#categories")
  .querySelectorAll(".item");

console.log(`Number of categories: ${categoriesItemsRef.length}`);

categoriesItemsRef.forEach(item => {
  console.log(`Category: ${item.querySelector("h2").textContent}`);
  console.log(`Elements: ${item.querySelectorAll("li").length}`);
});