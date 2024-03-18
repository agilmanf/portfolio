import { abouts, skills } from "src/data";
import { cn } from "src/lib/helpers";
import { Badge } from "./ui/badge";

type AboutItemProps = {
  title: string;
  description: string;
  icon: string;
};

function AboutItem({ title, description, icon, ...props }: AboutItemProps) {
  return (
    <div
      className="about-box w-2/5 md:w-2/6 lg:w-1/5 flex flex-col items-center drop-shadow-2xl"
      {...props}
    >
      <div className="about-icon w-24 h-24 flex">
        <i
          className={cn(
            "fi w-full text-4xl flex items-center justify-center",
            icon
          )}
        />
      </div>
      <h4 className="text-lg lg:text-2xl font-bold pt-3 lg:pb-2">{title}</h4>
      <p className="text-center text-xs md:text-sm">{description}</p>
    </div>
  );
}

function SkillCard({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div className="relative skill-card px-3 lg:p-6 py-4 w-full lg:text-xl border border-stone-600">
      <h4 className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 sm:left-4 sm:translate-x-0 bg-[#292929] px-2 pb-1 lg:pb-3 text-center lg:text-left text-stone-400">
        {title}
      </h4>
      <div className="skill-icon flex flex-wrap justify-center lg:justify-start gap-3 lg:text-xs">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary" className="rounded-none">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <main
      id="about"
      className="py-7 w-full max-w-[1600px] relative md:py-19 lg:p-20 container text-white"
    >
      <div className="w-full flex justify-center">
        <h1 className="title text-[28px] lg:text-3xl font-bold inline-block">
          ABOUT
        </h1>
      </div>
      <div className="about-me mt-8 lg:mt-16 flex flex-wrap justify-center lg:justify-around gap-x-3 md:gap-x-16 lg:gap-x-0 gap-y-10">
        {abouts.map((about, index) => (
          <AboutItem
            key={index}
            title={about.title}
            description={about.description}
            icon={about.icon}
            {...about.aos}
          />
        ))}
      </div>

      <section className="flex flex-wrap gap-y-5 gap-x-8 mt-10 lg:mt-20 px-6 justify-around">
        <aside
          className="lg:w-1/3 flex flex-col items-center"
          data-aos="fade-up"
        >
          <div className="my-img-container drop-shadow-xl items-center">
            <div className="my-img w-40 h-40 lg:w-52 lg:h-52"></div>
          </div>
          <h2 className="text-2xl mt-4 my-1 font-bold">Who's this guy?</h2>
          <p className="text-xs md:text-base text-center">
            I'm a computer science enthusiast with two years of web development
            experience, always eager to learn new tech. I'm also passionate
            about design and{" "}
            <a
              className="text-orange-500"
              href="https://skilvul.com"
              target="_blank"
            >
              currently working as a web developer at Skilvul
            </a>
            , where I love collaborating with my team to create innovative
            solutions.
          </p>
        </aside>
        <article
          className="w-full lg:w-1/2 flex flex-col mb-5"
          data-aos="fade-up"
        >
          <h2 className="text-xl xl:text-2xl font-bold text-center opacity-95 mb-6 lg:mb-3">
            Tech Toolbox
          </h2>
          <div className="text-gray-800 font-bold grid lg:grid-cols-1 md:grid-cols-2 gap-5">
            <SkillCard title="Frontend" skills={skills.frontend} />
            <SkillCard title="Backend" skills={skills.backend} />
            <SkillCard title="Tools" skills={skills.tools} />
            <SkillCard title="Other" skills={skills.others} />
          </div>
        </article>
      </section>
    </main>
  );
}
