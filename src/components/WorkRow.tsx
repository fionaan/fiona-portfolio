import { motion } from "motion/react"; 
import type { workType } from "./Works";


export default function WorkRow ({title, description, image}: workType) {
    return (
        <motion.div
            whileHover={{ 
                scale: 1.1,
            }}

            className="flex flex-col justify-end gap-y-2 border-b-1 border-b-white/20 mt-7 h-[22vmin] pb-3">
            <p className="work-title text-transparent bg-clip-text bg-linear-to-r from-white to-newBlack from-60% w-[60%] overflow-hidden whitespace-nowrap">{title}</p>
            <p className="work-description w-[50%] overflow-hidden text-ellipsis max-h-15">{description}</p>
            <img src="" alt="" />
        </motion.div>
    )
}