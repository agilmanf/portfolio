import { projects } from "src/data";

import ProjectCard from "src/components/Projects/ProjectCard";

export default function Projects() {
  return (
    <>
      <section
        id="projects"
        className="py-7 px-6 m-auto relative md:px-10 lg:px-20 lg:py-10 pb-14 lg:pb-28 text-white"
      >
        <div className="w-full flex justify-center mb-12 lg:mb-16">
          <h1 className="title text-[28px] lg:text-3xl font-bold inline-block">
            PROJECTS
          </h1>
        </div>

        <div className="project-container container m-auto relative w-full grid lg:grid-cols-3 md:grid-cols-2 auto-rows-min gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      {/* <section className="modal-container">
        <div id="melodico" className="modal-bg group">
          <div className="modal">
            <aside>
              <img
                className="object-cover w-full"
                src="./images/projects/Modal-Melodico.jpg"
                alt=""
              />
            </aside>
            <article>
              <h4 className="font-bold text-sm lg:text-xl xl:text-3xl 2xl:text-4xl">
                Melodico
              </h4>
              <h5 className="text-orange-400 text-xs lg:text-base xl:text-lg 2xl:text-2xl">
                Music Streaming WebApp
              </h5>
              <p className="leading-2 max-h-28 mt-2 text-xs overflow-y-scroll pr-1 lg:max-h-full lg:overflow-auto lg:pr-0 lg:text-sm xl:text-base xl:my-3 2xl:text-lg 2xl:my-5">
                Final project bootcamp yang saya buat menggunakan teknologi MERN
                STACK, mulai dari design web, membangun backend untuk mengelola
                dan upload data, hingga coding frontend-nya. Adapun lagu &
                gambar yang telah di upload saya simpan di Amazon S3.
              </p>
              <ul className="tech-stack">
                <li>React.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Node.js</li>
                <li>Bootstrap</li>
                <li>Heroku</li>
                <li>Amazon S3</li>
              </ul>
              <div className="mt-4 text-sm flex gap-2 xl:mt-6 2xl:text-lg">
                <a
                  className="bg-stone-800 text-white rounded-sm p-2 shadow-md hover:scale-95 lg:px-4"
                  href="https://melodico.netlify.app/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className="bg-stone-800 text-white rounded-sm p-2 shadow-md hover:scale-95 lg:px-4"
                  href="https://github.com/agilmanf/melodico"
                  target="_blank"
                >
                  Source
                </a>
              </div>
            </article>
            <a className="close" href="/#projects">
              &times;
            </a>
          </div>
        </div>

        <div id="haku-library" className="modal-bg group">
          <div className="modal">
            <aside>
              <img
                className="object-cover w-full"
                src="./images/projects/Modal-Haku-Library.jpg"
                alt=""
              />
            </aside>
            <article>
              <h4 className="font-bold text-sm lg:text-xl xl:text-3xl 2xl:text-4xl">
                <a
                  target="_blank"
                  href="https://www.canva.com/design/DAE6qnNfias/D84NNqwv7V2MtkTyUglK9A/edit?utm_content=DAE6qnNfias&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                >
                  Haku Library
                </a>
              </h4>
              <h5 className="text-orange-400 text-xs lg:text-base xl:text-lg 2xl:text-2xl">
                Online Library | Read Ebook
              </h5>
              <p className="leading-2 max-h-28 mt-2 text-xs overflow-y-scroll pr-1 lg:max-h-full lg:overflow-auto lg:pr-0 lg:text-sm xl:text-base xl:my-3 2xl:text-lg 2xl:my-5">
                Project pertama yang saya buat menggunakan React.js. Sebuah
                website perpustakaan online yang menyediakan layanan membaca
                buku digital (e-book) secara gratis. Dengan menggunakan API
                Google Books, buku-buku yang ada di Haku Library cukup lengkap
                dan update.
              </p>
              <ul className="tech-stack">
                <li>React.js</li>
                <li>Redux</li>
                <li>Bootsrap</li>
                <li>Google Books API</li>
              </ul>
              <div className="mt-4 text-sm flex gap-2 xl:mt-6 2xl:text-lg">
                <a
                  className="bg-stone-800 text-white rounded-sm p-2 shadow-md hover:scale-95 lg:px-4"
                  href="https://haku-library.netlify.app/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className="bg-stone-800 text-white rounded-sm p-2 shadow-md hover:scale-95 lg:px-4"
                  href="https://github.com/agilmanf/haku-library"
                  target="_blank"
                >
                  Source
                </a>
              </div>
            </article>
            <a className="close" href="/#projects">
              &times;
            </a>
          </div>
        </div>

        <div id="pasar-ikan" className="modal-bg group">
          <div className="modal">
            <aside>
              <img
                className="object-cover w-full"
                src="./images/projects/Modal-Pasar-Ikan.png"
                alt=""
              />
            </aside>
            <article>
              <h4 className="font-bold text-sm lg:text-xl xl:text-3xl 2xl:text-4xl">
                Pasar Ikan
              </h4>
              <h5 className="text-orange-400 text-xs lg:text-base xl:text-lg 2xl:text-2xl">
                eCommerce
              </h5>
              <p className="leading-2 max-h-28 mt-2 text-xs overflow-y-scroll pr-1 lg:max-h-full lg:overflow-auto lg:pr-0 lg:text-sm xl:text-base xl:my-3 2xl:text-lg 2xl:my-5">
                Project pertama yang saya buat saat belajar Web Dev dan belajar
                cara menggunakan API. Dibuat hanya menggunakan Vanilla Javascipt
                & Bootstrap.
              </p>
              <ul className="tech-stack">
                <li>Vanilla Javascript</li>
                <li>Bootstrap</li>
                <li>mockAPI</li>
              </ul>
              <div className="mt-4 text-sm flex gap-2 xl:mt-6 2xl:text-lg">
                <a
                  className="bg-stone-800 text-white rounded-sm p-2 shadow-md hover:scale-95 lg:px-4"
                  href="https://pasar-ikan.netlify.app/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className="bg-stone-800 text-white rounded-sm p-2 shadow-md hover:scale-95 lg:px-4"
                  href="https://github.com/agilmanf/pasar-ikan"
                  target="_blank"
                >
                  Source
                </a>
              </div>
            </article>
            <a className="close" href="/#projects">
              &times;
            </a>
          </div>
        </div>

        <div id="gamegratis" className="modal-bg group">
          <div className="modal">
            <aside>
              <img
                className="object-cover w-full"
                src="./images/projects/Modal-Gamegratis.jpg"
                alt=""
              />
            </aside>
            <article>
              <h4 className="font-bold text-sm lg:text-xl xl:text-3xl 2xl:text-4xl">
                Game Gratis
              </h4>
              <h5 className="text-orange-400 text-xs lg:text-base xl:text-lg 2xl:text-2xl">
                Free Games Portal
              </h5>
              <p className="leading-2 max-h-28 mt-2 text-xs overflow-y-scroll pr-1 lg:max-h-full lg:overflow-auto lg:pr-0 lg:text-sm xl:text-base xl:my-3 2xl:text-lg 2xl:my-5">
                Project yang saya buat untuk mempelajari teknologi Next.js dan
                Typescript. Didalamnya mengumpulkan informasi game - game gratis
                dan legal dari berbagai platform, seperti steam, epic games,
                ubisoft dan lain lain.
              </p>
              <ul className="tech-stack">
                <li>Typescript</li>
                <li>Next.js</li>
                <li>Tailwind</li>
                <li>Express.js</li>
                <li>MongoDB</li>
              </ul>
              <div className="mt-4 text-sm flex gap-2 xl:mt-6 2xl:text-lg">
                <a
                  className="bg-stone-800 text-white rounded-sm p-2 shadow-md hover:scale-95 lg:px-4"
                  href="https://gamegratis.vercel.app/"
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className="bg-stone-800 text-white rounded-sm p-2 shadow-md hover:scale-95 lg:px-4"
                  href="https://github.com/agilmanf/gamegratis"
                  target="_blank"
                >
                  Source
                </a>
              </div>
            </article>
            <a className="close" href="/#projects">
              &times;
            </a>
          </div>
        </div>
      </section> */}
    </>
  );
}
