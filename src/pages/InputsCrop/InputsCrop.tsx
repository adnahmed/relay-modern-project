import React, {FC, useState, useEffect} from 'react';
import './InputsCrop.scss';
import {Link} from "react-router-dom";

interface InputsCropProps {
}

const InputsCrop: FC<InputsCropProps> = () => {
    const [crop, setCrop] = useState('')
    useEffect(() => {
        // Fetch Crop from Backend
        setCrop('Potato')
    })
    return (
        <div>
            <ul>
                <li>
                    <a><Link to="seed">Seed</Link></a>
                </li>
                <li>
                    <a>
                        <Link to="irrigation">Irrigation</Link>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default InputsCrop;