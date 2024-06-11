import { ReactNode, createContext, useEffect, useState } from "react"
import { convertCssTimeValueToMilliseconds, getCssPropUnitMap } from "../../utils/utils";

export type ThemeMode = 'light' | 'dark' | 'system'

export const ThemeContext = createContext({
    theme: 'dark' as ThemeMode,
    setTheme: (theme: ThemeMode) => {theme},
    setTransition: (isActive: boolean) => {isActive},
    isOnTransition: false
});

type ThemeProviderProps = {
    children: ReactNode
}
export default function ThemeProvider(props: ThemeProviderProps) {
    const [activeTheme, setActiveTheme] = useState<ThemeMode>('dark');
    const [animatiionRun, setAnimationRun] = useState(false);

    useEffect(() => {
        async function setTheme() {
            if (animatiionRun === false) {
                setAnimationRun(true);
                // Animation duration waiting
                const el = document.querySelector('.MagicCurtain_MagicCurtainItem__xLo6I[data-visibility="animating-out"]');
                if (el) {
                    let animationDuration = window.getComputedStyle(el).getPropertyValue('--animation-duration') || '0s';
                    animationDuration = convertCssTimeValueToMilliseconds(animationDuration)
                    let { num: ms } = getCssPropUnitMap(animationDuration)
                    console.log('Animation duration', ms, 'ms');
                    await new Promise(r => setTimeout(r, ms));
                    el.setAttribute('data-visibility', 'hidden');
                }
                setAnimationRun(false);
            }
        }
        setTheme();
    }, [activeTheme]);

    const attrs = {
        theme: activeTheme,
        isOnTransition: animatiionRun,
        setTransition: (isActive: boolean) => {
            setAnimationRun(isActive);  
        },
        setTheme: (theme: ThemeMode) => {
            setActiveTheme(theme);
        }
    }

    return (
        <ThemeContext.Provider value={attrs}>
            {props.children}
        </ThemeContext.Provider>
    )
};

