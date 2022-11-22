import {useState} from 'react';
import './GlowyButton.scss';
export interface GlowyButtonProps {
    children?
    onClick?
    style?
}
export function GlowyButton(props: GlowyButtonProps) {
    const [background, setBackground] = useState('white')
    const onMouseEnter = () => {
        setBackground('lightblue')
    }
    const onMouseLeave = () => {
        setBackground('white')
    }
    return <div
        style={{
            color: 'blue',
            borderWidth: '2px',
            borderRadius: '1em',
            padding: '15px',
            textAlign: 'center',
            marginRight: '3em',
            background: `${background}`,
            ...props.style
        }} onMouseEnter={onMouseEnter} onClick={props.onClick} onMouseLeave={onMouseLeave}>{props.children}</div>
}

export default GlowyButton;
