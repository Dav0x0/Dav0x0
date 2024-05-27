import { cn } from "./utils/utils";
import PhotoCharacter from "../public/character.png";
import PortoPreview from "../public/image.png";

export default function App() {
    return (
        <>
            <MainPage />
        </>
    );
}

function MainPage() {
    return (
        <div className="w-screen min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 gradi overflow-x-hidden">
            <Navbar />

            <header className="w-2/4 mx-auto flex text-white items-center mt-40">
                <div className="text-xl w-2/3">
                    <h3>Who am I</h3>
                    <h2 className="text-5xl">Software Developer</h2>
                </div>
                <div className="w-1/3">
                    <img
                        src={PhotoCharacter}
                        alt="me"
                        className="max-w-[270px]"
                    />
                </div>
            </header>

            <div className="w-3/4 mx-auto -mt-80">
                <div className="grid grid-cols-3 gap-3">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="p-2 rounded-md overflow-hidden backdrop-blur-sm bg-white/20">
                        <img src={PortoPreview} alt="" />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi numquam atque et sapiente, eum sunt voluptatibus? Qui culpa maiores asperiores eum architecto, quae ab necessitatibus laborum, reprehenderit suscipit commodi praesentium!
                    </div>
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
            </div>
        </div>
    );
}
