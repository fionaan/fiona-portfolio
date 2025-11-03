import SectionTitle from "./SectionTitle";
import TechStackTable from "./TechStackTable";

export default function TechStack() {
    return (
        <section className="flex flex-col text-center md:flex-row gap-y-5 md:gap-y-0 md:justify-between h-fit px-10 sm:px-30 md:px-45">            
            <SectionTitle title="Tech Stack"/>
            <TechStackTable />
        </section>
            
    )
}