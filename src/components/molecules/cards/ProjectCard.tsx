import { FaGithub, FaLock } from "react-icons/fa";
import PortoPreview from "../../../../public/image.png";
import TechStack from "../TechStack";
type ProjectProps = {

}

export default function ProjectCard({}: ProjectProps) {
    return (
        <div className="border rounded-xl overflow-hidden border-slate-500 bg-slate-800">
            <img src={PortoPreview} alt="" />
            <div className="p-3 text-white">
                <h2 className="font-semibold text-lg">
                    <span className="inline-block">Lorem Ipsum Dolor</span>
                    <span className="inline-block ml-2">
                        {true ? <FaGithub /> : <FaLock />}
                    </span>
                </h2>
                <p className="text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex justify-between px-4 pb-5 items-end">
                <TechStack stack={['laravel', 'react']} />
                <div>
                    <a className="text-white py-1 px-2 rounded-md border hover:bg-slate-400 hover:border-slate-400 hover:text-slate-900">
                        demo
                    </a>
                </div>
            </div>
        </div>
    )
}