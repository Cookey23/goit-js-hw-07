import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const itemsMarkup = renderGalleryItems(galleryItems);



gallery.insertAdjacentHTML('beforeend', itemsMarkup);

function renderGalleryItems(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => 
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    ).join('');

};

const galleryModalShow = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
    captionDelay: 250,

});
console.log(galleryItems);
