import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const container = document.querySelector('.gallery');

const markup = galleryItems.map(
    (item) =>
        `<li data-preview="${item.preview}" class="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}" />
        </a>
        </li>`
    
    ).join('');

container.insertAdjacentHTML('beforeend', markup);
container.addEventListener('click', onClick);

function onClick(event) {
    if (event.target.tagName !== 'IMG') {
        return;
    }
    
    const imageSource = event.target.dataset.source;
    const imageAlt = event.target.alt;
    event.preventDefault();

    const instance = basicLightbox.create(`
    <img class = "gallery__image" src = "${imageSource}" alt = "${imageAlt}" />
    ` );
    instance.show();
}

console.log(galleryItems);

