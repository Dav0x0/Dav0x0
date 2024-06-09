import { CssVariable } from "react"

interface IVarsPolygonBg {
    'pg1': {
        'bg1': CssVariable,
        'bg2': CssVariable,
    },
    'pg2': {
        'bg1': CssVariable,
        'bg2': CssVariable,
        'bg3': CssVariable,
    }
}

type PolygonBgProps = {
    colors: IVarsPolygonBg,
    className?: string
}
export default function PolygonBg({ colors, ...args }: PolygonBgProps) {
    return (
        <svg width="2324" height="2471" viewBox="0 0 2324 2471" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 
            'opacity':0.5,
            '--pg1-color-bg1': `var(${colors.pg1.bg1})`,
            '--pg1-color-bg2': `var(${colors.pg1.bg2})`,
            '--pg2-color-bg1': `var(${colors.pg2.bg1})`,
            '--pg2-color-bg2': `var(${colors.pg2.bg2})`,
            '--pg2-color-bg3': `var(${colors.pg2.bg3})`,
        }} {...args}>
            <path d="M412.687 1663.5C426 1579 834.187 1090.65 954.502 1006C1052.68 936.926 1222.02 799.467 1281.01 751.221C1288.67 744.959 1300.05 751.214 1298.93 761.042L1149.99 2073.49C1149.15 2080.86 1141.5 2085.35 1134.71 2082.35C1076.53 2056.7 847.054 1955.59 749.5 1914C550.053 1828.97 399.373 1748 412.687 1663.5Z" fill="url(#paint0_radial_2_9)" />
            <path d="M98.0021 596.5C64.0623 507.535 1644.59 484.048 1785.49 482.132C1791.62 482.048 1795.5 487.008 1795.5 493.137L1795.5 939L1806.89 2037.58C1806.96 2043.42 1802.43 2048.29 1796.6 2048.67L738.369 2116.79C729.951 2117.33 723.89 2108.96 727.559 2101.36C783.034 1986.5 1105.47 1314.46 1078.5 1266C1049 1213 131.001 682.999 98.0021 596.5Z" fill="url(#paint1_radial_2_9)" />
            <defs>
                <radialGradient id="paint0_radial_2_9" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1331 1206) rotate(132.039) scale(2395.34 1242.12)">
                    <stop offset="0.220059" stopColor="var(--pg1-color-bg1)" stopOpacity="0" />
                    <stop offset="1" stopColor="var(--pg1-color-bg2)" />
                </radialGradient>
                <radialGradient id="paint1_radial_2_9" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1805.5 906.5) rotate(-157.191) scale(2116.51 2619.27)">
                    <stop stopColor="var(--pg2-color-bg1)" stopOpacity="0" />
                    <stop offset="0.375734" stopColor="var(--pg2-color-bg2)" stopOpacity="0.62" />
                    <stop offset="1" stopColor="var(--pg2-color-bg3)" stopOpacity="0.72" />
                </radialGradient>
            </defs>
        </svg>
    )
};
