type SparatorProps = {
    axis?: 'horizontal' | 'vertical'
}

export default function Sparator({axis = 'vertical'}: SparatorProps) {
    return <div className={axis === 'horizontal' ? 'border-t' : 'border-l'}></div>
}