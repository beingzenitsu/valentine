const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const snowballDiv = document.getElementById("snowball");
const question = document.getElementById("question");
const music = document.getElementById("bgMusic");
const typeText = document.getElementById("typeText");

// ❤️ Typewriter message
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

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// YES button click
yesBtn.addEventListener("click", () => {
    question.innerText = "";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    typeText.style.display = "none";
    snowballDiv.classList.remove("hidden");
    music.play();
});
