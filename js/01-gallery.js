import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
gallery.innerHTML = galleryItems.reduce(
  (html, current) =>
    html +
    `<div class="gallery__item"><a class="gallery__link" href="${current.original}"> <img src="${current.preview}" alt="${current.description}" data-source="${current.original}" class="gallery__image"></a></div> `,
  ""
);
function showImg(e) {
  e.preventDefault();
  const originalImg = e.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src='${originalImg}'>
`);

  instance.show();
  function onEscPress(e) {
    if (e.code === "Escape") {
      window.removeEventListener("keydown", onEscPress);
      instance.close();
    }
  }
  window.addEventListener("keydown", onEscPress);
}
gallery.addEventListener("click", showImg);
