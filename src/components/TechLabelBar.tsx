import TechLabel from "./TechLabel";

export default function TechLabelBar({ labels }: {labels: string[]}) {
  return (
    <div className="flex gap-x-1">
      {labels.map((l) => (
        <TechLabel name={l} />
      ))}
    </div>
  );
}
