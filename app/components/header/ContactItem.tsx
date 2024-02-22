import React from "react";
import { cn } from "~/lib/helpers";

type ContactItemProps = {
  title: string;
  icon: string;
  href: string;
};

export default function ContactItem({
  title,
  icon,
  href,
  ...props
}: ContactItemProps) {
  return (
    <a
      className="inline-flex self-start gap-2 items-center group"
      href={href}
      {...props}
    >
      <i className={cn("fi text-3xl 2xl:text-5xl", icon)} />
      <span className="origin-left lg:inline-block w-0 scale-x-0 group-hover:scale-x-100 transition-all hidden">
        {title}
      </span>
    </a>
  );
}
