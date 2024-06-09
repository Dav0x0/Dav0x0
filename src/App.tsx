import { cn } from "./utils/utils";
import { TypeAnimation } from "react-type-animation";
import Sparator from "./components/atoms/Sparator";
import { ReactNode, useContext } from "react";
import ProjectCard from "./components/molecules/cards/ProjectCard";
import ThemeModeBtn from "./components/molecules/buttons/ThemeModeBtn";
import PolygonBg from "./components/atoms/PolygonBg";
import { FaGithub } from "react-icons/fa";
import { ThemeContext } from "./components/providers/ThemeProvider";

export default function App() {
    const {theme: activeTheme } = useContext(ThemeContext);

    return (
        <>
            <div className="MagicCurtain_MagicCurtainItem__xLo6I" data-visibility={activeTheme == 'dark' ? 'visible' : 'animating-out'}>
                {activeTheme == 'dark' && (  
                    <MainPage theme="dark" />
                )}
            </div>
            <div className="MagicCurtain_MagicCurtainItem__xLo6I" data-visibility={activeTheme == 'light' ? 'visible' : 'animating-out'}>
                {activeTheme == 'light' && (
                    <MainPage theme="light" />
                )}
            </div>
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
        <header className="text-white relative max-h-[800px] h-screen w-screen max-w-screen-2xl mx-auto">
            <div className="absolute flex justify-center h-full w-full overflow-hidden">
                <PolygonBg
                    className="-mt-[70rem] -mr-[90rem]"
                    colors={{ 
                        pg1: {
                            bg1: "--pg-color1",
                            bg2: "--pg-color2",
                        },
                        pg2: {
                            bg1: "--pg-color3",
                            bg2: "--pg-color4",
                            bg3: "--pg-color5",
                        }
                    }} />
            </div>

            <div className="relative w-4/6 mx-auto flex items-center pt-40">
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
                    {/* <img src={PhotoCharacter} alt="me" className="max-w-[270px]" /> */}
                </div>
            </div>
        </header>
    )
}

function Footer() {
    return (
        <footer className="container text-slate-300 mx-auto">
            <div className="w-full flex justify-between border-t border-slate-700 mt-5 py-5">
                <div>David Aprilio</div>
                <div>
                    <a href="https://github.com/Davidaprilio/davidaprilio.github.io" className="text-3xl">
                        <FaGithub />
                    </a>
                </div>
                <div>
                    FullStack Developer
                </div>
            </div>
        </footer>
    )
}

function MainPage({theme}: {theme: string}) {
    return (
        <div 
            data-mode={theme}
            className="w-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 relative"
        >
            <Navbar />

            <HeaderHero />

            <div className="w-3/4 mx-auto">
                <div className="grid grid-cols-3 gap-5">
                    {Array.from({ length: 10 }).map((_, i) => (
                       <ProjectCard key={i} />
                    ))}

                </div>
            </div>

            <Footer />
        </div>
    );
}

function Navbar() {
    return (
        <div className="w-full fixed top-0 flex justify-center p-3 z-50">
            <div className="flex gap-x-3 mx-auto bg-slate-200 dark:bg-slate-800 border border-slate-400 dark:border-slate-700 bg-opacity-80 p-2 rounded-full">
                {Array.from({ length: 3 }).map((_, i) => (
                    <button
                        key={i}
                        className={cn(
                            "text-slate-800 dark:text-slate-300 rounded-full hover:bg-slate-500 hover:bg-opacity-70 px-3 py-0",
                            {
                                "bg-white bg-opacity-40 backdrop-blur-xs text-black": i === 0,
                            }
                        )}
                    >
                        Menu{i + 1}
                    </button>
                ))}

                <Sparator className="border-slate-600" />

                <ThemeModeBtn />
            </div>
        </div>
    );
}
