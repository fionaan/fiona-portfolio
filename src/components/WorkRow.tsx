import { motion } from "motion/react";
import type { workType } from "../types/global_types";
import TechLabelBar from "./TechLabelBar";

export default function WorkRow({ title, description, img, techs }: workType) {
  const container = {
    noHover: {
      height: "22vmin",
    },
    hover: {
      height: "32vmin",
    }
  }

  const image = {
    noHover: {
      opacity: 0,
      y: -50,
      // scale: 1
    },
    hover: {
      opacity: 1,
      y: 0,
      // scale: 1.1
    }
  }

  return (
    <motion.div
      variants={container}
      initial="noHover"
      whileHover="hover"
      transition={{duration: 0.3, ease: "easeOut"}}
      className="relative flex justify-between border-b-1 border-b-white/20 mt-7 overflow-hidden"
    >
      <div className="flex flex-col justify-end gap-y-2 w-[70%] pb-3">
        <TechLabelBar labels={techs}/>
        <p className="work-title text-transparent bg-clip-text bg-linear-to-r from-white to-newBlack from-60% w-[80%] overflow-hidden whitespace-nowrap">
          {title}
        </p>
        <p className="work-description w-[70%] overflow-hidden text-ellipsis max-h-15">
          {description}
        </p>
      </div>
      <motion.img
        variants={image}
        transition={{duration: 0.3, ease: "easeOut"}}
        src={img.src}
        alt={img.alt}
        className="absolute w-[35%] top-0 right-0"
      />
    </motion.div>
  );
}
