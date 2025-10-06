import { works } from "../constants/data";
import SectionTitle from "./SectionTitle";
import WorkRow from "./WorkRow";

export default function Works () {
    return (
        <div className="h-screen px-45">
            <SectionTitle title="Works"/>
            {works.map(w => (
                <WorkRow title={w.title} description={w.description} img={w.img} techs={w.techs}/>
            ))}
        </div>
    )
}