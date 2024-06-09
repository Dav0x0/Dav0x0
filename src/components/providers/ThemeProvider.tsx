import { ReactNode, createContext, useEffect, useState } from "react"
import { convertCssTimeValueToMilliseconds, getCssPropUnitMap } from "../../utils/utils";

export type ThemeMode = 'light' | 'dark' | 'system'

export const ThemeContext = createContext({
    theme: 'dark' as ThemeMode,
    setTheme: (theme: ThemeMode) => {theme},
    isOnTransition: false
});

type ThemeProviderProps = {
    children: ReactNode
}
export default function ThemeProvider(props: ThemeProviderProps) {
    const [activeTheme, setActiveTheme] = useState<ThemeMode>('dark');
    const [animatiionRun, setAnimationRun] = useState(false);

    useEffect(() => {
        if (animatiionRun === false) {
            setAnimationRun(true);
            // Animation duration waiting
            const el = document.querySelector('.MagicCurtain_MagicCurtainItem__xLo6I[data-visibility="animating-out"]');
            if (el) {
                let animationDuration = window.getComputedStyle(el).getPropertyValue('--animation-duration') || '0s';
                animationDuration = convertCssTimeValueToMilliseconds(animationDuration)
                let { num: ms } = getCssPropUnitMap(animationDuration)
                console.log('Animation duration', ms, 'ms');
                setTimeout(() => {
                    el.setAttribute('data-visibility', 'hidden');
                    setAnimationRun(false);
                }, ms);
            }
        }
    }, [activeTheme]);

    const attrs = {
        theme: activeTheme,
        isOnTransition: animatiionRun,
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

