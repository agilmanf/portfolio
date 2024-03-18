import { cn } from "src/lib/helpers";
import { About } from "src/types";

function AboutItem({ title, description, icon, aos }: About) {
  return (
    <div
      className="about-box w-2/5 md:w-2/6 lg:w-1/5 flex flex-col items-center drop-shadow-2xl"
      {...aos}
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

export default AboutItem;
