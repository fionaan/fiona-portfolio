type techType = {
  id: number;
  name: string;
  alt: string;
  image: string;
}[];

export default function TechStackTable() {
  const technologies: techType = [
    { id: 1, name: "CSS", alt: "css", image: "css.svg" },
    { id: 2, name: "HTML", alt: "html", image: "html.svg" },
    { id: 3, name: "JavaScript", alt: "javascript", image: "javascript.svg" },
    { id: 4, name: "Figma", alt: "figma", image: "figma.svg" },
    { id: 5, name: "React", alt: "react", image: "react.svg" },
    { id: 6, name: "Tailwind", alt: "tailwind", image: "tailwindcss.png" },
    { id: 7, name: "Express", alt: "express", image: "express.svg" },
    { id: 8, name: "Node.js", alt: "nodejs", image: "nodejs-icon.svg" },
    { id: 9, name: "NestJS", alt: "nestjs", image: "nestjs.svg" },
    { id: 10, name: "MongoDB", alt: "mongodb", image: "mongodb.svg" },
    { id: 11, name: "Java", alt: "java", image: "java.svg" },
  ];
  return (
    <div className="flex flex-wrap gap-4 gap-y-10 h-fit w-[50%]">
      {technologies.map((tech) => (
          <div className="flex flex-col">
            <img
              className="noise p-4 aspect-square w-[15vmin]"
              src={tech.image}
              alt={tech.alt}
            />
            <span className="label">{tech.name}</span>
          </div>
      ))}
    </div>
  );
}
