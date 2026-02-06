const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const typeText=document.getElementById("typeText");
const question=document.getElementById("question");
const snowball=document.getElementById("snowball");
const slideshow=document.getElementById("slideshow");
const slideImg=document.getElementById("slideImg");
const loveText=document.getElementById("loveText");
const heartsLayer=document.getElementById("hearts-layer");
const music=document.getElementById("bgMusic");
const ending=document.getElementById("ending");
const constellation=document.getElementById("constellation");
const starsMessage = document.getElementById("starsMessage");
const waitMessage = document.getElementById("waitMessage");
const endingMusic = document.getElementById("endingMusic");

let slideshowInterval,loveInterval,heartInterval;
let paused = false;
let slideTimeout = null;

const CLIMAX_TIME=125;

const message = "Lavanya Singh (Chinoooooo) ❤️\n\nIn a world full of noise and uncertainty,\nyou became my peace, my home, and my safest feeling.";

let t=0;
function typeWriter(){
  if(t<message.length){
    typeText.innerHTML+=message.charAt(t++);
    setTimeout(typeWriter,40);
  }else{
    question.classList.remove("hidden");
  }
}
window.onload=typeWriter;

noBtn.addEventListener("mouseover",()=>{
  noBtn.style.position="fixed";
  noBtn.style.left=Math.random()*80+"vw";
  noBtn.style.top=Math.random()*80+"vh";
});

const photos=Array.from({length:26},(_,i)=>`photo${i+1}.jpg`);
let photoIndex=0;

function startSlideshow(){
  slideshow.classList.remove("hidden");
  slideImg.src=photos[photoIndex];
  slideImg.classList.add("show");
  
  pauseBtn.style.display = "block";

  slideshowInterval=setInterval(()=>{
    slideImg.classList.remove("show");
    setTimeout(()=>{
      photoIndex=(photoIndex+1)%photos.length;
      slideImg.src=photos[photoIndex];
      slideImg.classList.add("show");
    },900);
  },4500);
}

const loveLines = [
"Loving you feels like finally being understood.",
"You are the calm my heart was searching for.",
"Every moment with you feels quietly perfect.",
"You make ordinary days feel special.",
"My world became softer the day you arrived.",
"You are the peace I never knew I needed.",
"Being with you feels like home.",
"Your presence makes everything feel right.",
"You are my favorite part of every day.",
"With you, silence never feels empty.",
"You didn’t just enter my life — you changed its meaning.",
"My heart learned patience the day it met you.",
"Somehow, you make time slow down and matter.",
"I never knew comfort could exist in another person.",
"You feel like a memory I’ve known forever.",
"You turned my fears into quiet confidence.",
"Even on my worst days, you feel like light.",
"You are the reason my heart feels steady.",
"Loving you feels like destiny, not effort.",
"You made love feel simple and real.",
"I found peace in places I didn’t know existed — in you.",
"You are the quiet answer to my loud thoughts.",
"My soul feels lighter when I’m with you.",
"You make forever feel possible.",
"I stopped searching when I found you.",
"You are not just part of my life — you are its warmth.",
"Your love feels like a safe place I can always return to.",
"You make even ordinary moments unforgettable.",
"My heart feels complete when you smile.",
"You are the gentlest chapter of my life.",
"With you, I understand what love truly means.",
"You are my calm in every storm.",
"My world feels right when you’re near.",
"You are the feeling I never want to lose.",
"I choose you — in every version of life."
];


let loveIndex=0;
let visiblePoints=[];

function addLovePoint(){
  visiblePoints.forEach(p=>p.classList.remove("active"));

  const point=document.createElement("div");
  point.className="love-point active";
  point.innerText=loveLines[loveIndex];

  loveText.prepend(point);
  visiblePoints.push(point);

  if(visiblePoints.length>10){
    loveText.removeChild(visiblePoints[0]);
    visiblePoints.shift();
  }

  loveIndex=(loveIndex+1)%loveLines.length;
}


function startLovePoints(){
  addLovePoint();
  loveInterval = setInterval(addLovePoint, 3500);

}

function createHeart(){
  const h=document.createElement("div");
  h.className="heart";
  h.innerText=Math.random()>0.5?"❤️":"🤍";
  h.style.top=Math.random()*100+"%";
  h.style.fontSize=Math.random()*18+12+"px";
  h.style.animationDuration=Math.random()*6+6+"s";
  heartsLayer.appendChild(h);
  setTimeout(()=>h.remove(),12000);
}

yesBtn.addEventListener("click", () => {
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  typeText.style.display = "none";
  question.style.display = "none";

  snowball.classList.remove("hidden");
  music.play();

  heartInterval = setInterval(createHeart, 600);

  setTimeout(() => {

    snowball.style.opacity = "0";
    snowball.style.transition = "opacity 1.5s ease";
    

    setTimeout(() => {
      document.getElementById("intro").style.display = "none";

      startSlideshow();
      startLovePoints();
    }, 1500);
  }, 6000); 

  watchForClimax();
});


function watchForClimax(){
  const check=setInterval(()=>{
    if(music.currentTime>=CLIMAX_TIME){
      clearInterval(check);
      startEnding();
    }
  },400);
}

function startEnding(){
  clearInterval(slideshowInterval);
  clearInterval(loveInterval);
  clearInterval(heartInterval);

  music.pause();

  document.body.classList.add("ending-mode");

  loveText.style.opacity = "0";
  slideshow.style.opacity = "0";
  pauseBtn.style.opacity = "0";
  pauseBtn.style.opacity = "0";
  pauseBtn.style.pointerEvents = "none";

  setTimeout(() => {
    ending.classList.add("show");
  }, 3500);

  setTimeout(() => {
  ending.classList.remove("show");
  ending2.classList.add("show");

  endingMusic.volume = 0.8;
  endingMusic.play();

}, 8000);


  setTimeout(() => {
    ending2.classList.remove("show");
    ending3.classList.add("show");
  }, 12000);

  setTimeout(() => {
    ending3.classList.remove("show");
    startStars();
  }, 15000);
}

const starPositions = [
  {x:40,y:28},{x:50,y:24},{x:60,y:28},
  {x:32,y:36},{x:45,y:34},{x:55,y:34},{x:68,y:36},
  {x:30,y:48},{x:70,y:48},
  {x:35,y:60},{x:65,y:60},
  {x:42,y:72},{x:58,y:72},
  {x:50,y:84}
];

let starsClicked = 0;
const TOTAL_STARS = starPositions.length;

const starMessage = document.getElementById("starMessage");

function startStars(){
  constellation.style.display="block";

  starPositions.forEach((pos,i)=>{
    setTimeout(()=>{
      const star=document.createElement("div");
      star.className="star";
      star.style.left=pos.x+"%";
      star.style.top=pos.y+"%";

    star.onclick = () => {
    if (!star.classList.contains("lit")) {
      star.classList.add("lit");

      starsClicked++;

    starMessage.innerText =
      starLessons[i % starLessons.length];

    starMessage.style.opacity = "1";

    setTimeout(() => {
      starMessage.style.opacity = "0";
    }, 3000);

    if (starsClicked === TOTAL_STARS) {
      triggerHeartPulse();
    }
  }
};

      constellation.appendChild(star);
    },i*350);
  });
}

function triggerHeartPulse() {
  constellation.classList.add("pulse");

  const centerLove = document.getElementById("centerLove");

  setTimeout(() => {
    centerLove.classList.add("show");
  }, 900);

  setTimeout(() => {
  const finalEnding = document.getElementById("finalEnding");
  finalEnding.classList.add("show");

  setTimeout(typeFinalMessage, 1200);
}, 20000);

}

pauseBtn.addEventListener("click", () => {
  paused = !paused;

  if (paused) {
    pauseBtn.innerText = "▶";

    music.pause();
    endingMusic?.pause();

    clearInterval(slideshowInterval);
    clearInterval(loveInterval);
    clearInterval(heartInterval);
    clearTimeout(slideTimeout);

  } else {
    pauseBtn.innerText = "||";

    music.play();

    slideshowInterval = setInterval(nextSlide, 4500);
    loveInterval = setInterval(addLovePoint, 7000);
    heartInterval = setInterval(createHeart, 600);
  }
});


function nextSlide() {
  if (paused) return;

  slideImg.classList.remove("show");

  slideTimeout = setTimeout(() => {
    if (paused) return;

    photoIndex = (photoIndex + 1) % photos.length;
    slideImg.src = photos[photoIndex];
    slideImg.classList.add("show");
  }, 900);
}


const starLessons = [
`Love isn’t about perfection,
it’s about choosing each other every day.`,

`Real love feels calm,
not confusing.`,

`The right person feels like peace,
not pressure.`,

`Love grows stronger,
when patience exists.`,

`Two hearts understand,
even in silence.`,

`Love is not found,
it is built together.`,

`Being loved deeply,
changes how you see the world.`,

`The safest love,
is the one that stays.`,

`Some souls recognize each other,
without explanation.`,

`Love is when “home”
becomes a person.`,

`The strongest bond,
is quiet understanding.`,

`Love means staying,
even on difficult days.`,

`Two imperfect people,
choosing forever.`,

`Your heart knows,
when it has found its place.`
];

const finalMessage =
`THE END ✨

And soon… the day you were born arrives.
The day my world was unknowingly waiting for.
Happy Birthday in advance, MY LOVE ❤️`;


let finalIndex = 0;

function typeFinalMessage() {
  const el = document.getElementById("finalText");

  if (finalIndex < finalMessage.length) {
    el.innerHTML += finalMessage.charAt(finalIndex++);
    setTimeout(typeFinalMessage, 60);
  }
}
