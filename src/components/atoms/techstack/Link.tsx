import { PropsWithChildren } from "react"

type LinkProps = PropsWithChildren<{
    href: string
}>

export default function Link({href, children}: LinkProps) {
    return (
        <a href={href}>
            {children}
        </a>
    )
}