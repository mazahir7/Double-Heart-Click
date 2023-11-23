"use strict";

const loveMe = document.querySelector(".loveMe");
const likes = document.querySelector(".like-count");

let clickTime = 0;
let likeCounter = 0;


loveMe.addEventListener("click", (e) => {

  if (clickTime === 0) {
    clickTime = new Date().getTime();
  }
  else {
    if ((new Date().getTime() - clickTime) < 800) {
      createHeart(e);
      clickTime = 0;
    }
    else {
      clickTime = new Date().getTime();
    }
  }
});

function createHeart(e) {

  // click position as per the viewport
  const x = e.clientX;
  const y = e.clientY;

  // element position on the viewport
  const Xoffset = e.target.offsetLeft;
  const Yoffset = e.target.offsetTop;

  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("fa-heart");

  heart.style.top = `${y - Yoffset}px`;
  heart.style.left = `${x - Xoffset}px`;
  loveMe.append(heart);

  setTimeout(() => {
    heart.remove();
  }, 1000);

  likes.textContent = ++likeCounter;
}

