import { Project } from "src/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card group" data-aos="fade-up" data-aos-delay="0">
      <div
        className="project-card-background"
        style={{
          backgroundImage: "url(./images/projects/Thumbnail-Melodico.jpg)",
        }}
      ></div>
      <div className="project-card-content">
        <p className="text-center">
          <span className="text-orange-400">Music Streaming WebApp</span>. Situs
          yang menyediakan layanan music streaming yang bisa diakses secara
          gratis.
        </p>
        <a
          href="#melodico"
          className="p-2 border xl:text-sm hover:bg-white hover:text-stone-800 transition-all"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
