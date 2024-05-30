import { cn } from "./utils/utils";
import PhotoCharacter from "../public/character.png";
import { TypeAnimation } from "react-type-animation";
import Sparator from "./components/atoms/Sparator";
import { ReactNode } from "react";
import ProjectCard from "./components/molecules/cards/ProjectCard";
import ThemeModeBtn from "./components/molecules/buttons/ThemeModeBtn";

export default function App() {
    return (
        <>
            <MainPage />
        </>
    );
}

function HeroLink({link, children}: {link: string, children: ReactNode}) {
    return(
        <a href={link} target="_blank">{children}</a>
    )
}

function HeaderHero() {
    return (
        <header className="w-2/4 mx-auto flex text-white items-center mt-40">
            <div className="text-xl w-2/3">
                <h3 className="text-2xl">
                    Who am I
                    <span className="font-semibold pl-3">David</span>
                </h3>
                <TypeAnimation
                    sequence={[
                        'Fullstack Developer', 2000,
                        'Backend Developer', 2000,
                        'Kang Koding', 1000,
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    className="text-5xl"
                    // style={{ fontSize: '2em', display: 'inline-block' }}
                />
                <div className="border-t mt-3 pt-3 flex gap-x-3">
                    <HeroLink link="https://github.com/Davidaprilio">Github</HeroLink>
                    <Sparator />
                    <HeroLink link="https://www.linkedin.com/in/david-a-531714186">LinkedIn</HeroLink>
                    <Sparator />
                    <HeroLink link="https://www.hackerrank.com/profile/david1_aprilio4">HackerRank</HeroLink>
                </div>
            </div>
            <div className="w-1/3">
                <img
                    src={PhotoCharacter}
                    alt="me"
                    className="max-w-[270px]"
                />
            </div>
        </header>
    )
}

function MainPage() {
    return (
        <div className="w-screen min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 gradi overflow-x-hidden">
            <Navbar />

            <HeaderHero />

            <div className="w-3/4 mx-auto">
                <div className="grid grid-cols-3 gap-5">
                    {Array.from({ length: 10 }).map((_, i) => (
                       <ProjectCard key={i} />
                    ))}

                </div>
            </div>
        </div>
    );
}

function Navbar() {
    return (
        <div className="w-full fixed top-0 flex justify-center p-3">
            <div className="flex gap-x-3 mx-auto">
                {Array.from({ length: 3 }).map((_, i) => (
                    <button
                        key={i}
                        className={cn(
                            "text-white rounded-full hover:bg-slate-500 hover:bg-opacity-70 px-3 py-0",
                            {
                                "bg-white text-black": i === 0,
                            }
                        )}
                    >
                        Menu{i + 1}
                    </button>
                ))}

                <ThemeModeBtn />g
            </div>
        </div>
    );
}
