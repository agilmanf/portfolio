const el = document.querySelector(".background");
const header = document.querySelector("header");

header.addEventListener("mousemove", (e) => {
  let transform = "";

  switch (true) {
    case document.body.clientWidth > 1280:
      transform = "scale(1.2)";
      break;
    case document.body.clientWidth > 1024:
      transform = "scale(1.4)";
      break;
    case document.body.clientWidth > 768:
      transform = "scale(1.6)";
      break;
    case document.body.clientWidth < 640:
      transform = "scale(1.8)";
      break;
    default:
      transform = "scale(1.1)";
  }

  // console.log(transform);

  let sensitivity = 0.05;
  let translateX = (e.clientX - window.innerWidth / 2) * sensitivity;
  let translateY = (e.clientY - window.innerHeight / 2) * sensitivity;
  transform += `translate(${translateX}px, ${translateY}px)`;
  el.style.transform = transform;
});

// AOS ///////////////////////////////////
AOS.init({ duration: 1200, once: true });
