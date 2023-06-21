const carouselSlide = document.querySelector(".carousel-slide");
const carouselImages = document.querySelectorAll(".carousel-slide img");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;

const size = carouselImages[0].clientWidth;

// console.log(carouselImages);
console.log(`size is ${size}`);
console.log(carouselSlide.clientWidth);

// carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
carouselSlide.style.transform = `translateX(${-size * counter}px)`;

// Button listener
nextBtn.addEventListener("click", () => {
  carouselSlide.style.transition = `all 300ms ease-in-out`;
  counter++;
  console.log(counter);
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener("click", () => {
  carouselSlide.style.transition = `all 300ms ease-in-out`;
  counter--;
  console.log(counter);
  carouselSlide.style.transform = `translateX(${-size * counter}px)`;
});
