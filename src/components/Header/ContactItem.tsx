import { cn } from "src/lib/helpers";

type ContactItemProps = {
  title: string;
  icon: string;
  href: string;
};

function ContactItem({ title, icon, href, ...props }: ContactItemProps) {
  return (
    <a
      className="inline-flex self-start gap-2 items-center group"
      href={href}
      target="_blank"
      {...props}
    >
      <i className={cn("fi text-3xl 2xl:text-5xl", icon)} />
      <span className="origin-left lg:inline-block w-0 scale-x-0 group-hover:scale-x-100 transition-all hidden">
        {title}
      </span>
    </a>
  );
}

export default ContactItem;
