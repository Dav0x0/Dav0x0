import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "../../providers/ThemeProvider";
import { useContext } from "react";

type ThemeModeBtnProps = {

}
export default function ThemeModeBtn({}: ThemeModeBtnProps) {
    const {theme, setTheme, isOnTransition} = useContext(ThemeContext);


    return (
        <button 
            disabled={isOnTransition}
            className="text-white p-1 rounded-full hover:bg-slate-500 hover:bg-opacity-70 text-2xl"
            onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
        >
            {theme == 'dark' ? <MdDarkMode /> : <MdLightMode /> }
        </button>
    )
}