import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "src/components/ui/dialog";
import { Project } from "src/types";

export default function ProjectDialog({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger className="p-2 border xl:text-sm hover:bg-white hover:text-stone-800 transition-all">
        Learn More
      </DialogTrigger>
      <DialogContent className="flex w-full max-w-7xl p-8 gap-8">
        <aside className="w-full">
          <img className="object-cover w-full" src={project.pictureUrl}></img>
        </aside>

        <DialogDescription asChild>
          <article className="w-full max-w-md">
            <h3 className="font-bold text-stone-700 text-sm lg:text-xl xl:text-3xl 2xl:text-4xl">
              {project.title} ({project.year})
            </h3>
            <h4 className="text-orange-400 text-xs lg:text-base xl:text-lg 2xl:text-2xl">
              {project.subTitle}
            </h4>
            <p className="leading-2 max-h-28 mt-2 text-xs overflow-y-scroll pr-1 lg:max-h-full lg:overflow-auto lg:pr-0 lg:text-sm xl:text-base xl:my-3 2xl:text-lg 2xl:my-5">
              {project.description}
            </p>

            <ul className="tech-stack">
              {project.techs.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
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
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
