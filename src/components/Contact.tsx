export default function Contact() {
  return (
    <div className="relative h-[70vh] flex justify-center items-end">
      <p className="absolute top-10 text-center leading-7 font-redhat font-thin text-white/70 text-[1.2em] tracking-wide">
      I'm always up for a good conversation about tech, ideas, or building cool things.
      <br/>Got anything in mind? :)
      </p>
      <img className="absolute w-22 bottom-45 left-24 rotate-25 scale-x-[-1]" src="./white-arrow.png" alt="arrow" />
      <p className="font-redhat text-white font-bold text-[18em] tracking-tight">connect!</p>
      <p className="absolute bottom-53 left-60 font-libre text-[2.5em] italic text-white">let's</p>
    </div>
  )
}