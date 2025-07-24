const images = document.querySelectorAll('.image-box img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const caption = document.getElementById('caption');
const closeBtn = document.querySelector('.close');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const filterButtons = document.querySelectorAll('.filter-btn');
const imageBoxes = document.querySelectorAll('.image-box');

let currentImgIndex = 0;


images.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentImgIndex = index;
    showLightbox(img.src);
  });
});

function showLightbox(src) {
  lightbox.style.display = 'flex';
  lightboxImg.src = src;
  caption.textContent = images[currentImgIndex].parentElement.getAttribute('data-caption');
}

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex + 1) % images.length;
  lightboxImg.src = images[currentImgIndex].src;
  caption.textContent = images[currentImgIndex].parentElement.getAttribute('data-caption');
});

prevBtn.addEventListener('click', () => {
  currentImgIndex = (currentImgIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentImgIndex].src;
  caption.textContent = images[currentImgIndex].parentElement.getAttribute('data-caption');
});

document.addEventListener('keydown', (e) => {
  if (lightbox.style.display === 'flex') {
    if (e.key === 'ArrowRight') nextBtn.click();
    else if (e.key === 'ArrowLeft') prevBtn.click();
    else if (e.key === 'Escape') closeBtn.click();
  }
});

// Filters
filterButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');
    imageBoxes.forEach((box) => {
      box.style.display = filter === 'all' || box.classList.contains(filter) ? 'block' : 'none';
    });
  });
});
