const albums = {
  nature: [
    {
      src: "https://media.istockphoto.com/id/1473666403/photo/deep-forest-waterfall-in-thailand-erawan-waterfall-national-park-kanjanaburi-thailand.jpg?s=612x612&w=0&k=20&c=weBEF1fecZcspR3wqZz79ZmH4fnauLTqy9A4xEb8xi4=",
      alt: "Waterfall"
    },
    {
      src: "https://media.istockphoto.com/id/152538687/photo/morning-light.jpg?s=612x612&w=0&k=20&c=W-sIciYQnwZXpTxuwp7Lj-2VIwLCRepiys6HYfbvzQ0=",
      alt: "Forest Path"
    },
    {
      src: "https://media.istockphoto.com/id/538449165/photo/beautiful-cloudscape-over-the-sea-sunset-shot.jpg?s=612x612&w=0&k=20&c=XwieRIV5Df3Azuk8tH3CnAlLA-GO5GBE7R7dKtb1POw=",
      alt: "Sunset View"
    }
  ],
  travel: [
    {
      src: "https://www.gonoise.com/cdn/shop/articles/16f45661868e38058cccb2c9e6d354f1.png?v=1655377811",
      alt: "Mountain Trek"
    },
    {
      src: "https://images.pexels.com/photos/809060/pexels-photo-809060.jpeg?cs=srgb&dl=pexels-zaib-809060.jpg&fm=jpg",
      alt: "City Lights"
    },
    {
      src: "https://cdn.pixabay.com/photo/2016/10/22/18/52/beach-1761410_1280.jpg",
      alt: "Beach Paradise"
    }
  ],
  food: [
    {
      src: "https://media.istockphoto.com/id/155433174/photo/bolognese-pens.jpg?s=612x612&w=0&k=20&c=A_TBqOAzcOkKbeVv8qSDs0bukfAedhkA458JEFolo_M=",
      alt: "Delicious Pasta"
    },
    {
      src: "https://media.istockphoto.com/id/503704970/photo/fresh-fruit-smoothies.jpg?s=612x612&w=0&k=20&c=lbhlRB41vLqRDNxXJfOFU79Rb2Tje4h0WeQMSDln_yY=",
      alt: "Refreshing Smoothie"
    },
    {
      src: "https://www.shutterstock.com/image-photo/turkish-coffee-colorful-eid-candy-600nw-2424301507.jpg",
      alt: "Dessert Delight"
    }
  ]
};

function loadAlbum(albumName) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  albums[albumName].forEach(image => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");

    const imgElement = document.createElement("img");
    imgElement.src = image.src;
    imgElement.alt = image.alt;
    imgElement.loading = "lazy";
    imgElement.onclick = () => openModal(image.src, image.alt);

    const caption = document.createElement("p");
    caption.classList.add("caption");
    caption.innerText = image.alt;

    imageContainer.appendChild(imgElement);
    imageContainer.appendChild(caption);
    gallery.appendChild(imageContainer);
  });
}

let currentIndex = 0;
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function openModal(src, alt) {
  modal.style.display = "flex";
  modalImg.src = src;
  modalCaption.innerText = alt;
  currentIndex = Object.values(albums).flat().findIndex(img => img.src === src);
}

function closeModal() {
  modal.style.display = "none";
}

function navigateImage(direction) {
  const allImages = Object.values(albums).flat();
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = allImages.length - 1;
  if (currentIndex >= allImages.length) currentIndex = 0;

  const newImage = allImages[currentIndex];
  openModal(newImage.src, newImage.alt);
}

prevBtn.addEventListener("click", () => navigateImage(-1));
nextBtn.addEventListener("click", () => navigateImage(1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") navigateImage(-1);
  if (event.key === "ArrowRight") navigateImage(1);
});

// Theme Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
