const cursor_circle = document.querySelector(".cursor-circle"),
      cursor = document.querySelectorAll(".cursor"),
      elements = document.querySelectorAll(".getHover");
const imageWrap = document.querySelector(".image-wrap");
const bigName = document.querySelector(".big-name");

function runAnimation() {
    imageWrap.style.height = "250px";
    imageWrap.style.backgroundSize = "100%";
    imageWrap.style.backgroundPosition = "center center";
    imageWrap.style.transform = "translateX(-50%)";
    bigName.style.opacity = "1";
    bigName.style.transform = "translateY(0)";
}

function getYDistance(el) {
    return window.innerHeight - document.querySelector(el).getBoundingClientRect().top;
}

window.addEventListener("mousemove", (e) => {
    let xPosition = e.clientX;
    let yPosition = e.clientY;

    cursor.forEach(ele => {
        ele.style.transform = `translate(calc(-50% + ${xPosition}px), calc(-50% + ${yPosition}px))`;
        ele.style.opacity = "1";
    });
});

elements.forEach(el => {
    el.addEventListener("mouseover", () => {
        cursor_circle.classList.add("biggerCursor");
    });
    el.addEventListener("mouseout", () => {
        cursor_circle.classList.remove("biggerCursor");
    });
});

runAnimation();

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navList   = document.querySelector('.nav-list');

  if (hamburger && navList) {
    hamburger.addEventListener('click', () => {
      navList.classList.toggle('active');
      const icon = hamburger.querySelector('i');
      if (icon) {
        icon.classList.toggle('bx-menu');
        icon.classList.toggle('bx-x');
      }
    });
  }
});
