import { technologies } from "../constants/data";

export default function TechStackTable() {
  return (
    <div className="flex flex-wrap gap-3 gap-y-10 h-fit w-[50%]">
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
