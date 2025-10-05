import { TechStack, type techType, type workTypeArray } from "../types/global_types";
import mercAirlines from "@/assets/works/homepage.png"

export const works: workTypeArray = [
  {
    title: "MERC Airlines",
    description:
      "If you're using Save As cairo png, you will get a white background.",
    img: {
      src: mercAirlines,
      alt: "merc-airlines-homepage",
    },
    techs: [TechStack.cpp, TechStack.vbnet]
  },
  {
    title: "CentroTech",
    description:
      "If you're using Save As cairo png, you will get a white background. The proper way to make a PNG with transparent background is to use Export Bitmap, as TechieLog said.",
    img: {
      src: "",
      alt: "",
    },
    techs: [TechStack.mongodb, TechStack.express, TechStack.react, TechStack.nodejs, TechStack.tailwindcss, TechStack.mongoose]
  },
];

export const technologies: techType = [
    { id: 1, name: "CSS", alt: "css", image: "css.svg" },
    { id: 2, name: "HTML", alt: "html", image: "html.svg" },
    { id: 3, name: "JavaScript", alt: "javascript", image: "javascript.svg" },
    { id: 4, name: "Figma", alt: "figma", image: "figma.svg" },
    { id: 5, name: "React", alt: "react", image: "react.svg" },
    { id: 6, name: "Tailwind", alt: "tailwind", image: "tailwindcss.png" },
    { id: 7, name: "Express", alt: "express", image: "express.svg" },
    { id: 8, name: "Node.js", alt: "nodejs", image: "nodejs-icon.svg" },
    { id: 9, name: "NestJS", alt: "nestjs", image: "nestjs.svg" },
    { id: 10, name: "MongoDB", alt: "mongodb", image: "mongodb.svg" },
    { id: 11, name: "Java", alt: "java", image: "java.svg" },
  ];
