import { MdDarkMode, MdLightMode } from "react-icons/md";

type ThemeModeBtnProps = {

}
export default function ThemeModeBtn({}: ThemeModeBtnProps) {
    return (
        <button className="text-white p-1 rounded-full hover:bg-slate-500 hover:bg-opacity-70 text-2xl">
            {true ? <MdDarkMode /> : <MdLightMode /> }
        </button>
    )
}