"use strict";

import items from "/JS/gallery-items.js";

const gallery = document.querySelector(".js-gallery");
const modal = document.querySelector(".js-lightbox");

gallery.insertAdjacentHTML("afterbegin", createGallery(items));

gallery.addEventListener("click", openModal);
modal.addEventListener("click", handleBtnClick);
modal.addEventListener("click", handleBackdropClick);

function openModal(e) {
  e.preventDefault();
  if (e.target === e.currentTarget) {
    return;
  }
  modal.querySelector("img").src = e.target.dataset.source;
  modal.classList.add("is-open");
  window.addEventListener("keydown", handleEscPess);
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.querySelector("img").src = "";
  window.removeEventListener("keydown", handleEscPess);
}

function handleBtnClick(e) {
  if (
    e.target ===
    e.currentTarget.querySelector('button[data-action="close-lightbox"]')
  )
    closeModal();
}

function handleBackdropClick(e) {
  if (e.target === e.currentTarget.querySelector(".lightbox__content"))
    closeModal();
}

function handleEscPess(e) {
  if (e.code !== "Escape") {
    return;
  }
  closeModal(e);
}

function createGalleryItem(source, dataSource, alternative) {
  const galleryItem = `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${dataSource}"
    >
      <img
        class="gallery__image"
        src="${source}"
        data-source="${dataSource}"
        alt="${alternative}"
      />
    </a>
  </li>`;
  return galleryItem;
}

function createGallery(arr) {
  return arr.reduce(
    (acc, { preview, original, description }) =>
      acc + createGalleryItem(preview, original, description),
    ""
  );
}
