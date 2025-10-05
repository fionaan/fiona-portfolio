export type workType = {
    title: string,
    description: string,
    img: imageType,
    techs: string[]
}

export type imageType = {
    src: string,
    alt: string,
}

export type workTypeArray =  workType[];

export type techType = {
  id: number;
  name: string;
  alt: string;
  image: string;
}[];

// export type labelBarType = {
//     labels: string[];
// }

export const TechStack = {
    cpp: "C++",
    vbnet: "VB.Net",
    mongodb: "MongoDB",
    express: "Express.js",
    react: "ReactJS",
    nodejs: "Node.js",
    mongoose: "Mongoose",
    tailwindcss: "TailwindCSS"
}