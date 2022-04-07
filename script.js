const el = document.querySelector(".background");
const header = document.querySelector("header");

header.addEventListener("mousemove", (e) => {
  let transform = `scale(1.2) `;
  let sensitivity = 0.05;
  let translateX = (e.clientX - window.innerWidth / 2) * sensitivity;
  let translateY = (e.clientY - window.innerHeight / 2) * sensitivity;
  transform += `translate(${translateX}px, ${translateY}px)`;
  console.log(transform);
  el.style.transform = transform;
});
