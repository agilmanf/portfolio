import type { V2_MetaFunction } from "@remix-run/node";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Hi, I'm Gilman | Web Developer" },
    {
      name: "description",
      content:
        "I am a Full-Stack Web Developer at Skilvul and a person who is very passionate about computer science. And have been learning to be a web developer for about a year. I am also very interested in design",
    },
  ];
};

export default function Index() {
  return (
    <main>
      <h1 className="text-blue-600">Hello World</h1>
    </main>
  );
}
