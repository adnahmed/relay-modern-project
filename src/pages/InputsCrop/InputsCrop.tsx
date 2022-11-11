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
            <b>Inputs Details</b>
            <ul>
                <li className="input-menu">
                    <a><Link to="seed">Seed</Link></a>
                </li>
                <li>
                    <a>
                        <Link to="irrigation">Irrigation</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to="labor">Labor</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to="weedicide">Weedicide</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to="pesticide">Pesticide</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to="fertilizer">Fertilizer</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to="micronutrients">Mirconutirents</Link>
                    </a>
                </li>
                <li>
                    <a>
                        <Link to="gross-inputs-cost">Gross Inputs Cost</Link>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default InputsCrop;