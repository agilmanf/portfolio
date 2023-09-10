import { useState } from "react";

export default function Header() {
  const [bgTransform, setBgTransform] = useState("");

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
        <div className="background" style={{ transform: bgTransform }} />
      </div>

      <header
        id="landing"
        className="relative shadow-lg px-7 lg:px-10 2xl:px-20"
        onMouseMove={handleMouseMove}
      >
        <nav className="flex pt-6 2xl:pt-12 justify-between absolute px-7 lg:px-10 2xl:px-20 left-0 right-0 top-0">
          <h2
            className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl cursor-pointer font-grandhotel"
            data-aos="fade-down"
          >
            agilman
          </h2>
          <div>
            <div className="space-y-1 border p-2 lg:hidden">
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
              <span className="block w-5 h-0.5 bg-white"></span>
            </div>
            <ul className="lg:flex gap-10 hidden">
              <li data-aos="fade-down" data-aos-delay="0">
                <a
                  className="after:origin-left hover:after:scale-100 font-bold"
                  href="#intro"
                >
                  Intro
                </a>
              </li>
              <li data-aos="fade-down" data-aos-delay="150">
                <a
                  className="after:origin-left after:scale-x-0 hover:after:scale-100"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li data-aos="fade-down" data-aos-delay="300">
                <a
                  className="after:origin-left after:scale-x-0 hover:after:scale-100"
                  href="#projects"
                >
                  My Projects
                </a>
              </li>
              <li data-aos="fade-down" data-aos-delay="450">
                <a
                  className="after:origin-left after:scale-x-0 hover:after:scale-100"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>

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
            <h4 className="md:pl-3 md:mt-1 -mt-2 md:text-2xl 2xl:text-3xl text-l">
              I'm a FullStack Javascript Developer
            </h4>
            <a
              className="border p-2 mt-4 inline-block lg:ml-3 hover:scale-95 transition-all 2xl:p-4"
              href="https://drive.google.com/file/d/1IQjXQiwO9GS_nO1cxt6N9tWldDTOks1K/view?usp=sharing"
              target="_blank"
            >
              Curriculum Vitae
            </a>
          </div>

          <div className="flex flex-row justify-center lg:flex-1 lg:flex-col lg:justify-end pb-7 2xl:pb-12">
            <div className="icon-container inline-flex gap-3 lg:flex-col text-sm 2xl:text-xl">
              <a
                className="inline-flex self-start gap-2 items-center group"
                href="https://github.com/agilmanf"
                data-aos="fade-right"
                data-aos-offset="-300"
              >
                {/* <ion-icon
                className="text-3xl 2xl:text-5xl"
                name="logo-github"
              ></ion-icon> */}
                <span className="origin-left md:inline-block w-0 scale-x-0 group-hover:scale-x-100 transition-all hidden">
                  Github
                </span>
              </a>
              <a
                className="self-start inline-flex gap-2 items-center group"
                href="https://www.linkedin.com/in/agilmanf/"
                data-aos="fade-right"
                data-aos-delay="150"
                data-aos-offset="-300"
              >
                {/* <ion-icon
                className="text-3xl 2xl:text-5xl"
                name="logo-linkedin"
              ></ion-icon> */}
                <span className="origin-left md:inline-block w-0 scale-x-0 group-hover:scale-x-100 transition-all hidden">
                  LinkedIn
                </span>
              </a>
              <a
                className="self-start inline-flex gap-2 items-center group"
                href="https://wa.me/+6281356160318"
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-offset="-300"
              >
                {/* <ion-icon
                className="text-3xl 2xl:text-5xl"
                name="logo-whatsapp"
              ></ion-icon> */}
                <span className="origin-left md:inline-block w-0 scale-x-0 group-hover:scale-x-100 transition-all hidden">
                  Whatsapp
                </span>
              </a>
              <a
                className="self-start inline-flex gap-2 items-center group"
                href="mailto:agilmanf@gmail.com"
                data-aos="fade-right"
                data-aos-delay="450"
                data-aos-offset="-300"
              >
                {/* <ion-icon
                className="text-3xl 2xl:text-5xl"
                name="mail"
              ></ion-icon> */}
                <span className="origin-left md:inline-block w-0 scale-x-0 group-hover:scale-x-100 transition-all hidden">
                  Email
                </span>
              </a>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
