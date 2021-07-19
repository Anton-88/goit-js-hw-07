// Напиши скрипт создания и очистки коллекции элементов. 
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего 
// рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const createBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');
const numberOfBoxes = document.querySelector('input[type="number"]');
let defBoxSize = 30;

const randomRgbColor = () => {
    const r = Math.round(Math.random() * (255 - 1) + 1);
    const g = Math.round(Math.random() * (255 - 1) + 1);
    const b = Math.round(Math.random() * (255 - 1) + 1);
    return `rgb(${r},${g},${b})`
}

function createBoxes(amount) {
    const boxesCollection = [];
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.backgroundColor = randomRgbColor();
        box.style.height = defBoxSize + 'px';
        box.style.width = defBoxSize + 'px';
        defBoxSize += 10;
        boxesCollection.push(box)
    }
    boxesContainer.append(...boxesCollection);
}

function destroyBoxes() {
    boxesContainer.innerHTML = ' ';
    defBoxSize = 30;
    numberOfBoxes.value = '';
}

function onCreateBtnClick() {
    const amount = Number(numberOfBoxes.value);
    createBoxes(amount);
}

function onDestroyBtnClick() {
    destroyBoxes();
}

createBtn.addEventListener('click', onCreateBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);