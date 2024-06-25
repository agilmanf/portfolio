import { Project, ProjectType } from "src/types";

import ProjectDialog from "src/components/Projects/ProjectDialog";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="relative project-card group"
      data-aos="fade-up"
      data-aos-delay="0"
    >
      <div
        className="project-card-background"
        style={{
          backgroundImage: `url(${project.thumbnailUrl})`,
        }}
      >
        {project.type === ProjectType.EXPERIMENTAL && (
          <div className="absolute bg-orange-400 top-0 right-0 p-2 rounded-bl-2xl text-sm font-semibold">
            Experimental Project
          </div>
        )}
      </div>
      <div className="project-card-content">
        <p className="text-center">
          <span className="text-orange-400">{project.subTitle}</span>.{" "}
          {project.shortDescription}
        </p>

        <ProjectDialog project={project} />
      </div>
    </div>
  );
}
