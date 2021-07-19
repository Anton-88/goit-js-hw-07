// при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение 
// в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');
const defaultName = document.querySelector('#name-output').textContent;

function onChangeInputName(event) {
    event.currentTarget.value ? outputName.textContent = event.currentTarget.value : 
    outputName.textContent = defaultName;
}

inputName.addEventListener('input', onChangeInputName)