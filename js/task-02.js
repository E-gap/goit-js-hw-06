const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const arrayLi = [];

for (const ingredient of ingredients) {
  
  const el = document.createElement("li");
  el.textContent = ingredient;
  el.classList.add("item");
  arrayLi.push(el);  

}


const ulIngredients = document.querySelector("#ingredients")

ulIngredients.append(...arrayLi);