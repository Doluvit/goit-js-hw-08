// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
galleryRef.style.liststyle = 'none';

const makeGallery = elements => {
  return elements
    .map(
      element => `<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
    <img
    class="gallery__image"
    loading = "lazy"
    src="${element.preview}"
    alt="${element.description}"
    />
    </a></li>`
    )
    .join('');
};
const galleryElements = makeGallery(galleryItems);
galleryRef.insertAdjacentHTML('beforeend', galleryElements);

galleryRef.addEventListener('click', onClick);

function onClick(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();
}
new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});
console.log(galleryItems);
