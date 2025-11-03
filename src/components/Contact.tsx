export default function Contact() {
  return (
    <div className="relative h-[70vh] flex justify-center items-end">
      <p className="absolute top-10 text-center leading-7 font-redhat font-thin text-white/70 text-[1.2em] tracking-wide">
        I'm always up for a good conversation about tech, ideas, or building cool things.
        <br />Got anything in mind? :)
      </p>
      <div className="relative">
        <img className="absolute w-22 top-5 -left-16 rotate-25 scale-x-[-1]" src="./white-arrow.png" alt="arrow" />
        <p className="font-redhat text-white font-bold text-[clamp(3em,19vw,19vw)] tracking-tight">connect!</p>
        <p className="absolute -top-1 sm:top-8 left-15 font-libre text-[clamp(1em,2.4vw,2.4vw)] italic text-white">let's</p>
      </div>
    </div>
  )
}