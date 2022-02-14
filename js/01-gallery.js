import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const itemsMarkup = renderGalleryItems(galleryItems);
let instance = null;

gallery.addEventListener('click', onGalleryItemClick);
gallery.insertAdjacentHTML('beforeend', itemsMarkup);

function renderGalleryItems(galleryItems) {
    return galleryItems.map(({ original, preview, description }) => 
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
     <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    ).join('');

};



function onGalleryItemClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
        return;
    }
    
    modalShow(e.target.dataset.source);
};



function modalShow(originalImage) {
     instance = basicLightbox.create(`<img src="${originalImage}">`,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscClick);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscClick);
      },
    },
  );
    instance.show();
};


function onEscClick(e) {
  if (e.code === 'Escape') {
    instance.close();
  }
}

 