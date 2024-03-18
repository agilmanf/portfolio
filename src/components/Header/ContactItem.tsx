import { cn } from "src/lib/helpers";
import { Contact } from "src/types";

function ContactItem({ title, icon, href, aos }: Contact) {
  return (
    <a
      className="inline-flex self-start gap-2 items-center group"
      href={href}
      target="_blank"
      {...aos}
    >
      <i className={cn("fi text-3xl 2xl:text-5xl", icon)} />
      <span className="origin-left lg:inline-block w-0 scale-x-0 group-hover:scale-x-100 transition-all hidden">
        {title}
      </span>
    </a>
  );
}

export default ContactItem;
