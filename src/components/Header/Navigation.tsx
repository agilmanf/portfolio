import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { usePopper } from "react-popper";
import { Popover } from "@headlessui/react";

import { navigations } from "src/data";
import { Nav } from "src/types";
import { cn } from "src/lib/helpers";

type NavItemProps = Nav & {
  isActive: boolean;
};

const NavItem = ({ title, href, aos, isActive }: NavItemProps) => (
  <li data-aos="fade-down" {...aos}>
    <a
      className={cn(
        "after:origin-left hover:after:scale-100 after:scale-x-0 font-bold",
        isActive && "after:scale-x-100"
      )}
      href={href}
    >
      {title}
    </a>
  </li>
);

const PopoverNavigation = () => {
  const [refElement, setRefElement] = useState<HTMLButtonElement | null>();
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>();
  const { styles, attributes } = usePopper(refElement, popperElement, {
    placement: "left-end",
  });

  return (
    <Popover className="relative">
      <Popover.Button ref={setRefElement}>
        <div className="border p-2 lg:hidden hover:bg-white hover:text-amber-900 transition cursor-pointer">
          <i className="fi fi-sr-menu-burger flex items-start" />
        </div>
      </Popover.Button>

      <Popover.Panel
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
      >
        <ul className="w-full max-w-sm h-full bg-white text-black">
          {navigations.map((nav, index) => (
            <li key={index}>
              <a href={nav.href}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a href="#">asdasd</a>
          </li>
        </ul>
      </Popover.Panel>
    </Popover>
  );
};

export default function Navigation() {
  const location = useLocation();
  const [hash, setHash] = useState("#intro");

  useEffect(() => {
    if (location.hash) {
      setHash(location.hash);
    }
  }, [location.hash]);

  return (
    <nav className="flex pt-6 2xl:pt-12 justify-between absolute px-7 lg:px-10 2xl:px-20 left-0 right-0 top-0">
      <h2
        className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl cursor-pointer font-grandhotel"
        data-aos="fade-down"
      >
        agilman
      </h2>
      <div>
        <PopoverNavigation />

        <ul className="lg:flex gap-10 hidden">
          {navigations.map((nav, index) => (
            <NavItem
              key={index}
              title={nav.title}
              href={nav.href}
              aos={nav.aos}
              isActive={hash === nav.href}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
}
