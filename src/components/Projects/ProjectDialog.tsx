import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "src/components/ui/dialog";
import { Project } from "src/types";
import { ProjectCarousel } from "./ProjectCarousel";

export default function ProjectDialog({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger className="p-2 border xl:text-sm hover:bg-white hover:text-stone-800 transition-all">
        Learn More
      </DialogTrigger>
      <DialogContent className="flex flex-col items-center w-full max-w-6xl max-h-[800px] overflow-x-hidden overflow-y-auto p-8 gap-8">
        <DialogTitle asChild className="text-stone-700 text-center">
          <div>
            <h2 className="font-bold text-4xl">{project.title}</h2>
            <h3 className="font-sans text-primary text-2xl font-normal">
              {project.subTitle}
            </h3>
          </div>
        </DialogTitle>

        <aside className="w-full ">
          <ProjectCarousel images={project.imageUrls} />
        </aside>

        <DialogDescription asChild>
          <article className="w-full">
            <h4 className="text-xl font-bold">Project Overview</h4>
            <div className="mt-2 text-[16px] leading-relaxed space-y-4">
              {project.description}
            </div>

            <hr className="my-8" />

            <h4 className="text-xl font-bold">Technologies</h4>
            <ul className="flex flex-wrap gap-2 mt-2">
              {project.techs.map((tech, index) => (
                <li className="bg-stone-200 px-2 py-1" key={index}>
                  {tech}
                </li>
              ))}
            </ul>

            <div className="flex flex-col lg:flex-row gap-8 mt-8 [&>*]:flex-1">
              {project.projectUrl && (
                <div>
                  <h4 className="text-xl font-bold">Website</h4>
                  <a
                    className="block text-[16px] text-primary underline underline-offset-4 mt-1"
                    href={project.projectUrl}
                    target="_blank"
                  >
                    {project.projectUrl}
                  </a>
                </div>
              )}

              {project.sourceUrl && (
                <div>
                  <h4 className="text-xl font-bold">Source Code</h4>
                  <a
                    className="block text-[16px] text-primary underline underline-offset-4 mt-1"
                    href={project.sourceUrl}
                    target="_blank"
                  >
                    {project.sourceUrl}
                  </a>
                </div>
              )}
            </div>
          </article>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
