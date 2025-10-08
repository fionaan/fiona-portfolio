export default function Intro() {
  return (
    <>
      <div
        className="flex flex-col md:flex-row justify-end items-start md:justify-center md:items-center gap-y-7 md:gap-x-20 h-screen pb-14 pl-4 pr-3 sm:px-13 md:pl-15 md:pr-0 md:pb-0">
        <div className="">
          <div>
            <h1 className="font-noto text-white font-semibold leading-[0.92] tracking-[-9px] sm:tracking-[-14px] md:tracking-[-16px] mr-[2px] text-[7em] sm:text-[10em] md:text-[13em]">Fiona</h1>
            <p className="font-libre italic text-white pl-2 text-[2.5em] sm:text-[3.8em] md:text-[4.8em]">
              Web Developer
            </p>
          </div>

        </div>
        <div className="w-[89%] md:w-[30%]">
          <p className="intro font-redhat md:font-[1.1em] text-whiteIntro leading-[1.4] sm:leading-[1.5] md:leading-[1.6] text-justify py-[13px] px-[17px] md:p-[20px]">
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
