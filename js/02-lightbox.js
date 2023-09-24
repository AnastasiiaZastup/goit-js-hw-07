import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const myGallery = document.querySelector('.gallery');


function galleryChoice(arr) {
  return arr.map((items) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${items.original}">
        <img class="gallery__image" src="${items.preview}" alt="${items.description}" />
      </a>
    </li>`;
  }).join('');
}
 
const galleryMarkup = galleryChoice(galleryItems);

myGallery.insertAdjacentHTML('beforeend', galleryMarkup);

const newGalery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsPosition: 'bottom',
    captionsDelay: 250,
});