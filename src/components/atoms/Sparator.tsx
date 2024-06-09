import { cn } from "../../utils/utils"

type SparatorProps = {
    axis?: 'horizontal' | 'vertical',
    className?: string,
}

export default function Sparator({axis = 'vertical', className}: SparatorProps) {
    return <div className={cn(
        className,
        axis === 'horizontal' ? 'border-t' : 'border-l'
    )}></div>
}