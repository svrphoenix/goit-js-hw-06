const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRefs=ingredients.map(ingredient => {
  const ingredientRef = document.createElement("li");  
  ingredientRef.textContent = ingredient;
  ingredientRef.classList.add("item");
  return ingredientRef;
});

document.querySelector("#ingredients").append(...ingredientsRefs);
