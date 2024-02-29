import { Suspense, lazy, useState } from "react";

import Contacts from "~/components/header/Contacts";
import Navigation from "~/components/header/Navigation";

export default function Header() {
  const [bgTransform, setBgTransform] = useState<string | null>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
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

    const sensitivity = 0.05;
    const translateX = (event.clientX - window.innerWidth / 2) * sensitivity;
    const translateY = (event.clientY - window.innerHeight / 2) * sensitivity;
    transform += `translate(${translateX}px, ${translateY}px)`;
    setBgTransform(transform);
  };

  return (
    <>
      <div className="background-container">
        <div
          className="background"
          {...(bgTransform && { style: { transform: bgTransform } })}
        />
      </div>

      <header
        id="landing"
        className="relative shadow-lg px-7 lg:px-10 2xl:px-20 text-white"
        onMouseMove={handleMouseMove}
      >
        <Navigation />

        <section className="flex flex-col lg:flex-row-reverse justify-between h-screen">
          <div
            className="my-auto xl:w-[55%] lg:text-left text-center"
            data-aos="fade-up"
          >
            <h1 className="xl:text-[84px] 2xl:text-[116px] sm:text-7xl text-[45px]">
              <span className="stroke inline-block">Gilman</span>
              <span className="font-bold inline-block md:text-right">
                Firdaus
              </span>
            </h1>
            <h4 className="md:pl-3 sm:mt-1 -mt-2 sm:text-2xl 2xl:text-3xl text-l">
              I'm a FullStack Web Developer
            </h4>
            <a
              className="border p-2 mt-4 inline-block lg:ml-3 hover:scale-95 transition-all 2xl:p-4"
              href="https://drive.google.com/file/d/1IQjXQiwO9GS_nO1cxt6N9tWldDTOks1K/view?usp=sharing"
              target="_blank"
            >
              Curriculum Vitae
            </a>
          </div>

          <Contacts />
        </section>
      </header>
    </>
  );
}
