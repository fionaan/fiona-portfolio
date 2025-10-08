import { IoLogoGithub } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { MdMailOutline } from "react-icons/md";
import { ImLinkedin2 } from "react-icons/im";

export default function LinkTray() {
  return (

    <IconContext.Provider
      value={{ className: 'text-newFuchsia', size: '1.5em' }}>
      <div className="flex flex-col items-center fixed bottom-0 gap-y-5 left-12 z-3">
        <a href="https://github.com/fionaan" target="_blank" rel="noopener noreferrer">
          <IoLogoGithub />
        </a>
        <a href="mailto:fionaanleimariano@gmail.com">
          <MdMailOutline />
        </a>
        <a href="https://www.linkedin.com/in/fiona-anlei-mariano/" target="_blank" rel="noopener noreferrer">
          <ImLinkedin2 />
        </a>
        <div className="w-[0.12em] h-[3.9em] bg-newFuchsia" />
      </div>
    </IconContext.Provider>
  )
}