import React from "../atoms/techstack/React";
import Laravel from "../atoms/techstack/Laravel";
import { Fragment } from "react/jsx-runtime";

type UTechStack = 'react' | 'laravel'
type TechStackProps = {
    stack: UTechStack[]
}

export default function TechStack({ stack }: TechStackProps) {
    return (
        <div className="px-1 py-2 text-zinc-900 dark:text-zinc-300 flex gap-x-3">
            {stack.map((t,i) => (
                <Fragment key={i}>
                    {
                        t=='react' ? <React /> : 
                        t=='laravel' ? <Laravel /> : 
                        null
                    }
                </Fragment>
            ))}
        </div>
    )
}