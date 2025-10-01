import SectionTitle from "./SectionTitle";
import WorkRow from "./WorkRow";

export type workType = {
    title: string,
}

export default function Works () {
    const works : workType[] = [
        {title: "Airline Booking Reservation System"},
        {title: "Electronic Medical Record (EMR) System"},
    ]
    return (
        <div className="h-screen px-20">
            <SectionTitle title="Works"/>
            {works.map(w => (
                <WorkRow title={w.title}/>
            ))}
        </div>
    )
}