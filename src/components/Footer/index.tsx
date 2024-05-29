import { contacts } from "src/data";
import { cn } from "src/lib/helpers";

export default function Footer() {
  return (
    <>
      <div className="relative -top-1 contact-edge">
        <div className="h-full" />
      </div>

      <div
        id="contact"
        className="text-white p-5 mb-16 md:mb-20 lg:mb-28 flex flex-col w-[320px] m-auto h-full items-center my-5 lg:my-10 md:w-[700px]"
      >
        <h1 className="text-3xl font-bold md:text-4xl mt-5 md:mt-8">
          Get In Touch
        </h1>
        <blockquote className="text-sm font-sans text-center mt-4 opacity-75 md:text-lg">
          Hi, I'm looking for a new opportunities, my inbox is always open, feel
          free to contact me. Whether you have a question or just want to say
          hi, I’ll try my best to get back to you!
        </blockquote>
        <a
          className="text-orange-400 border-orange-400 mt-7 border p-3 text-sm md:text-base transition-all ease-out duration-300 hover:text-stone-800 hover:bg-orange-400 hover:border-orange-400"
          href="mailto:agilmanf@gmail.com"
        >
          Send a Message
        </a>
      </div>

      <footer className="my-5 flex flex-col gap-2 items-center text-white">
        <a className="animate-bounce" href="#">
          <i className="fi fi-sr-triangle text-xs opacity-80 hover:opacity-100" />
        </a>
        <div className="inline-flex gap-3 text-2xl">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="opacity-80 transition-all ease-out duration-300 hover:scale-110 hover:opacity-100"
            >
              <i className={cn("fi", contact.icon)} />
            </a>
          ))}
        </div>

        <p className="text-xs opacity-75 font-mono">
          Designed & Created by{" "}
          <span className="text-orange-400">Gilman Firdaus</span> &copy; 2022
        </p>
      </footer>
    </>
  );
}
