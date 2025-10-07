export default function Intro() {
  return (
    <>
      <div
        className="flex justify-center items-center gap-x-20 h-screen pb-4 pl-20">
        <div className="">
          <div>
            <h1 className="text-white">Fiona</h1>
            <p className="web-developer text-white">
              Web Developer
            </p>
          </div>

        </div>
        <div className="w-[30%]">
          <p className="top-15 -left-30 right-50 intro text-white">
           I'm a <span className="p-highlight">Computer Science</span> graduate passionate about backend web development, strengthened by hands-on 
           experience from system projects and an internship as a backend developer at an IT solutions company. 
           I've led and collaborated on programs built with the <span className="p-highlight">MERN</span> stack, <span className="p-highlight">NestJS</span>, and <span className="p-highlight">Java</span>. While I focus mainly
          on backend development, I'm also growing my skills in frontend using React, HTML, CSS, and Tailwind. I 
          love learning, building, and creating solutions that make an impact.
          </p>
        </div>
      </div>
    </>
  );
}
