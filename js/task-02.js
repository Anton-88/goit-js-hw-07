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

let list = document.createElement('ul');
ingredients.forEach(ingredient => {
  let temp = document.createElement('li');
  temp.textContent = ingredient;
  list.appendChild(temp);
})
console.log('list :>> ', list);