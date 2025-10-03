import SectionTitle from "./SectionTitle";
import WorkRow from "./WorkRow";

export type workType = {
    title: string,
    description: string,
    img: imageType,
}

export type imageType = {
    src: string,
    alt: string,
}

type workTypeArray =  workType[];

export default function Works () {
    const works : workTypeArray = [
        {
            title: "MERC Airlines",
            description: "If you're using Save As cairo png, you will get a white background.",
            img: {
                src: "",
                alt: ""
            }
        },
        {
            title: "CentroTech",
            description: "If you're using Save As cairo png, you will get a white background. The proper way to make a PNG with transparent background is to use Export Bitmap, as TechieLog said.",
            img: {
                src: "",
                alt: ""
            }
        },
    ]
    return (
        <div className="h-screen px-20">
            <SectionTitle title="Works"/>
            {works.map(w => (
                <WorkRow title={w.title} description={w.description}/>
            ))}
        </div>
    )
}