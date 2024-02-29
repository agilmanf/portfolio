import { contacts } from "src/data";
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

export default function Contacts() {
  return (
    <div className="flex flex-row justify-center lg:flex-1 lg:flex-col lg:justify-end pb-7 2xl:pb-12">
      <div className="icon-container inline-flex gap-3 lg:flex-col text-sm 2xl:text-xl">
        {contacts.map((contact, index) => (
          <ContactItem
            key={index}
            title={contact.title}
            icon={contact.icon}
            href={contact.href}
            {...contact.aos}
          />
        ))}
      </div>
    </div>
  );
}
