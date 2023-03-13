import { BsLinkedin, BsGithub } from "react-icons/bs";

export function Header() {
  return (
    <header className="px-10 fixed w-full backdrop-blur-md">
      <div className="max-w-screen-xl py-3 border-b border-zinc-400/30 bg-zinc-200/30 mx-auto flex justify-center relative">
        <h1 className="text-xl text-black font-medium absolute left-0">
          Matheus Zago Bestana
        </h1>

        <div className="invisible md:visible lg:flex items-center gap-2 text-zinc-500">
          <a href="" className="px-2 hover:text-zinc-600">
            Work
          </a>
          <a href="" className="px-2 hover:text-zinc-600">
            Benefits
          </a>
          <a href="" className="px-2 hover:text-zinc-600">
            Process
          </a>
          <a href="" className="px-2 hover:text-zinc-600">
            About
          </a>
        </div>
        <div className="flex items-center gap-3 text-2xl absolute right-0">
          <a
            className="hover:text-indigo-600 transition-all"
            href="https://www.linkedin.com/in/matheusbestana/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="hover:text-indigo-600 transition-all"
            href="https://github.com/zagob"
            target="_blank"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </header>
  );
}
