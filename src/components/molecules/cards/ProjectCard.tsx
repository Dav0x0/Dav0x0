import { FaGithub, FaLock } from "react-icons/fa";
import PortoPreview from "../../../../public/image.png";
import TechStack from "../TechStack";
type ProjectProps = {

}

export default function ProjectCard({}: ProjectProps) {
    return (
        <div className="border rounded-xl overflow-hidden border-slate-500 bg-slate-300 dark:bg-slate-800 hover:scale-[1.04] transition-transform duration-500 text-slate-700 dark:text-white">
            <img src={PortoPreview} alt="" />
            <div className="p-3">
                <h2 className="font-semibold text-lg">
                    <span className="inline-block">Lorem Ipsum Dolor</span>
                    <span className="inline-block ml-2">
                        {true ? <FaGithub /> : <FaLock />}
                    </span>
                </h2>
                <p className="text-slate-700 dark:text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex justify-between px-4 pb-5 items-end">
                <TechStack stack={['laravel', 'react']} />
                <div>
                    <a className="py-1 px-2 rounded-md border-slate-700 dark:border-white hover:bg-slate-800 hover:border-slate-800 hover:text-slate-3 *:00 dark:hover:bg-slate-400 dark:hover:border-slate-400 dark:hover:text-slate-900">
                        demo
                    </a>
                </div>
            </div>
        </div>
    )
}