const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const randomImg = images[Math.floor(Math.random() * images.length)];

const randomBgImg = document.createElement("img");

randomBgImg.src = `img/${randomImg}`;

document.body.appendChild(randomBgImg);
