import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CssPropUnitMap {
    num?: number;
    unit: string;
}

/**
 * Takes a value and separates the number and unit into a key/value map.
 */
export const getCssPropUnitMap = (v: string): CssPropUnitMap => {
    v = v.trim();
    const numParts = v.match('[0-9.]+');
    let unit = 'ms';
    let num;
    const numString: string = numParts ? numParts[0] : '';
    if (numString) {
        unit = v.split(numString)[1];
        num = Number(numString);
    }
    return {
        num,
        unit,
    };
};

/**
 * Converts a css timing unit value into milliseconds.
 */
export const convertCssTimeValueToMilliseconds = (val: string): string => {
    const map = getCssPropUnitMap(val);
    const num = map ? map.num : undefined;
    if (!num) {
        return '';
    }
    const unit = val.replace(num + '', '');
    let value = num;
    if (unit === 's') {
        value = num * 1000;
    }
    return value + 'ms';
};
