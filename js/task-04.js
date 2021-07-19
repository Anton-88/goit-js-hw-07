// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = document.querySelector('#value');

function increment() {
    counterValue.innerHTML = Number(counterValue.innerHTML) + 1;
    counterValue.textContent = counterValue.innerHTML;
};

function decrement() {
    counterValue.innerHTML = Number(counterValue.innerHTML) - 1;
    counterValue.textContent = counterValue.innerHTML;
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
incrementBtn.addEventListener('click', increment);

const decrementBtn = document.querySelector('button[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);
