export default function Intro() {
  return (
    <>
      <section
        className="flex flex-col min-h-[100dvh] md:flex-row justify-end items-start md:justify-center md:items-center gap-y-7 md:gap-x-20 md:h-screen px-8 pb-10 sm:px-13 md:px-15 md:pb-0">

        {/* Title */}
        <div>
          <h1 className="font-noto text-white font-semibold leading-[0.92] tracking-[-3px] sm:tracking-[-8px] md:tracking-[-12px] lg:tracking-[-16px] text-[4em] sm:text-[7em] md:text-[10em] lg:text-[13em]">Fiona</h1>
          <p className="font-libre italic text-white pl-1 text-[1.8em] sm:text-[3.8em] md:text-[4.8em]">
            Web Developer
          </p>
        </div>

        {/* <div className="w-[100%] md:w-[30%]"> */}
          <p className="intro w-[100%] max-h-[90%] md:w-[30%] font-redhat text-[0.90em] sm:text-[1em] md:text-[1.05em] lg:text-[1.10em] text-whiteIntro leading-[1.4] sm:leading-[1.5] md:leading-[1.6] text-justify py-[13px] px-[17px] md:p-[20px]">
            I'm a <span className="p-highlight">Computer Science</span> graduate passionate about backend web development, strengthened by hands-on
            experience from system projects and an internship as a backend developer at an IT solutions company.
            I've led and collaborated on programs built with the <span className="p-highlight">MERN</span> stack, <span className="p-highlight">NestJS</span>, and <span className="p-highlight">Java</span>. While I focus mainly
            on backend development, I'm also growing my skills in frontend using React, HTML, CSS, and Tailwind. I
            love learning, building, and creating solutions that make an impact.
          </p>
        {/* </div> */}
      </section>
    </>
  );
}
