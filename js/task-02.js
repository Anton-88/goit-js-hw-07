const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

//для каждого элемента массива ingredients создаст отдельный li, 
//после чего вставит все li за одну операцию в список ul.ingredients

let list = document.querySelector('#ingredients');
// ingredients.forEach(ingredient => {
//   let temp = document.createElement('li');
//   temp.textContent = ingredient;
//   list.appendChild(temp);
// })

const addIngredient = ingredients.map( ingredient => {
  const ingredientItem = `<li>${ingredient}</li>`;
  return ingredientItem;
});
list.insertAdjacentHTML("beforeend", addIngredient.join(''));