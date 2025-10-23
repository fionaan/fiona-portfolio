import { works } from "../constants/data";
import SectionTitle from "./SectionTitle";
import WorkRow from "./WorkRow";

export default function Works () {
    return (
        <section className="h-fit px-45">
            <SectionTitle title="Works"/>
            {works.map(w => (
                <WorkRow title={w.title} description={w.description} img={w.img} techs={w.techs}/>
            ))}
        </section>
    )
}