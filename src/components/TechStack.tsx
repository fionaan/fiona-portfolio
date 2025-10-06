import SectionTitle from "./SectionTitle";
import TechStackTable from "./TechStackTable";

export default function TechStack() {
    return (
        <div className="flex justify-between h-fit px-45">            
            <SectionTitle title="Tech Stack"/>
            <TechStackTable />
        </div>
            
    )
}