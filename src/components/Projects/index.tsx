import { useMemo } from "react";
import { projects } from "src/lib/data/projects";

import ProjectCard from "src/components/Projects/ProjectCard";

export default function Projects() {
  const sortedProjects = useMemo(
    () =>
      projects.sort((a, b) => {
        if (b.year !== a.year) {
          return b.year - a.year;
        }
        return b.id.localeCompare(a.id);
      }),
    []
  );

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
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
