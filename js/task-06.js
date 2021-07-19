//Напиши скрипт, который бы при потере фокуса на инпуте, 
//проверял его содержимое на правильное количество символов.

const inputField = document.querySelector('#validation-input');

function lengthChecker(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === Number(inputField.dataset.length)) {
        inputField.classList.add('valid');
        inputField.classList.remove('invalid');
    } else {
        inputField.classList.add('invalid');
        inputField.classList.remove('valid');
    }
}

inputField.addEventListener('blur', lengthChecker);