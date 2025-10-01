import type { workType } from "./Works";

export default function WorkRow ({title}: workType) {
    return (
        <div className="flex flex-col justify-end border-b-1 border-b-white/20 mt-7 h-[22vmin] pb-3">
            <p className="work-title text-white w-[70%]">{title}</p>
        </div>
    )
}