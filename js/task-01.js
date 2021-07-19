//Посчитает и выведет в консоль количество категорий в ul#categories

const categoriesNumber = document.querySelector('#categories').querySelectorAll('.item').length;
console.log('The number of categories in the list is', categoriesNumber);


// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль 
// текст заголовка элемента (тега h2) и количество элементов в категории (всех вложенных в него элементов li).

for (let i = 0; i < categoriesNumber; i++) {
    console.log('Category :>> ', document.querySelector('#categories').getElementsByTagName('h2')[i].innerText);
    console.log('Number of elements :>> ', document.querySelector('#categories').querySelectorAll('.item > ul')[i].children.length);
}