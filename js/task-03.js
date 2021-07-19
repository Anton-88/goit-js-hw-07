const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Напиши скрипт для создания галлереи изображений по массиву данных.
// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.

// const imgContainer = document.querySelector('#gallery');
// imgContainer.classList.add('gallery-class');
// for (let i = 0; i < images.length; i++) {
//   const imgObjs = [...images];
//   const { url: imgUrl, alt: imgAlt } = imgObjs[i];
//   let element = document.createElement('li');
//   let image = document.createElement('img');
//   image.setAttribute('url', imgUrl);
//   image.setAttribute('alt', imgAlt);
//   image.width = 400;
//   image.height = 400;
//   element.appendChild(image);
//   imgContainer.append(element);
// }
// console.log('imgContainer :>> ', imgContainer);


const imgContainer = document.querySelector('#gallery');

const addGalleryItem = images.map(image => {
  const addGalleryImg = `<li><img src="${image.url}" alt="${image.alt}" width=400 height=300></li>`;
  return addGalleryImg;
});

imgContainer.insertAdjacentHTML("beforeend", addGalleryItem.join(''));
imgContainer.setAttribute("style", "list-style:none; display: grid; grid-template-columns: repeat(3, 1fr); gap: 50px;")