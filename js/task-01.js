const categoriesItemsRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItemsRef.length}`);

categoriesItemsRef.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});