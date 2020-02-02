"use strict";

// import items from "/JS/gallery-items.js";

const items = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/hokkaido-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/view-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
  
]; 

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

