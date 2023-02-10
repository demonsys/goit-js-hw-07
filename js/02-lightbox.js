import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
// galleryEl.innerHTML = galleryItems.reduce(
//   (html, current) =>
//     html +
//     `<a class="gallery__item" href="${current.original}"> <img src="${current.preview}" alt="${current.description}" class="gallery__image" /></a> `,
//   ""
// );
galleryEl.innerHTML = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href='${original}'> <img src='${preview}' alt='${description}' class="gallery__image" /></a> `
  )
  .join("");

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
