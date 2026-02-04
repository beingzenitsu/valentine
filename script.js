const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const snowballDiv = document.getElementById("snowball");
const question = document.getElementById("question");
const music = document.getElementById("bgMusic");
const typeText = document.getElementById("typeText");
const slideshow = document.getElementById("slideshow");
const slideImg = document.getElementById("slideImg");

const message = `Lavanya Singh (Chinoooooo) ❤️

From the day you came into my life,
everything became softer, brighter, and more beautiful.

You are my peace, my happiness,
and the reason behind my smile every single day.

This is not just a question…
it’s a memory I want us to remember forever.`;

let index = 0;

function typeWriter() {
    if (index < message.length) {
        typeText.innerHTML += message.charAt(index);
        index++;
        setTimeout(typeWriter, 40);
    } else {
        setTimeout(() => {
            question.classList.remove("hidden");
        }, 800);
    }
}

window.onload = typeWriter;

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});


const photos = [
  "photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg","photo5.jpg",
  "photo6.jpg","photo7.jpg","photo8.jpg","photo9.jpg","photo10.jpg",
  "photo11.jpg","photo12.jpg","photo13.jpg","photo14.jpg",
  "photo15.jpg","photo16.jpg","photo17.jpg"
];

let photoIndex = 0;

function startSlideshow() {
    slideshow.style.display = "flex";
    slideImg.style.opacity = "1";
    slideImg.src = photos[photoIndex];

    function showNextPhoto() {
        slideImg.style.opacity = "0";

        setTimeout(() => {
            photoIndex = (photoIndex + 1) % photos.length;
            slideImg.src = photos[photoIndex];
            slideImg.style.opacity = "1";
        }, 800);

        setTimeout(showNextPhoto, 4000);
    }

    setTimeout(showNextPhoto, 4000);
}



yesBtn.addEventListener("click", () => {
    question.innerText = "";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    typeText.style.display = "none";
    snowballDiv.classList.remove("hidden");
    music.play();

    setTimeout(() => {
    startSlideshow();
}, 1500);
});
