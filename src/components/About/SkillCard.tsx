import { Badge } from "src/components/ui/badge";

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

export default SkillCard;
