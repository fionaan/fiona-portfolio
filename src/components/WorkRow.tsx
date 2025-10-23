import { motion } from "motion/react";
import type { workType } from "../types/global_types";
import TechLabelBar from "./TechLabelBar";

export default function WorkRow({ title, description, img, techs }: workType) {
  const container = {
    noHover: {
      height: "26vmin",
    },
    hover: {
      height: "32vmin",
    },
  };

  const image = {
    noHover: {
      opacity: 0,
      y: -50,
      // scale: 1
    },
    hover: {
      opacity: 1,
      y: 0,
      // scale: 1
    },
  };

  const desc = {
    noHover: {
      maxHeight: "5.7vmin",
      WebkitLineClamp: 2,
    },
    hover: {
      maxHeight: "9vmin",
      WebkitLineClamp: "unset",
    },
  };

  return (
    <motion.article
      variants={container}
      initial="noHover"
      whileHover="hover"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative flex justify-between border-b-1 border-b-white/20 overflow-hidden"
    >
      <div className="flex flex-col justify-end gap-y-2 w-[70%] pb-3">
        <p className="work-title text-transparent bg-clip-text bg-linear-to-r from-white to-newBlack from-60% w-[80%] overflow-hidden whitespace-nowrap">
          {title}
        </p>
        <motion.p
          variants={desc}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="work-description w-[70%] overflow-hidden line-clamp-2"
        >
          {description}
        </motion.p>
        <TechLabelBar labels={techs} />
      </div>
      <div className="">
        <motion.img
          variants={image}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "center center" }}
          src={img.src}
          alt={img.alt}
          className="absolute h-full top-0 right-0"
        />
      </div>
    </motion.article>
  );
}
