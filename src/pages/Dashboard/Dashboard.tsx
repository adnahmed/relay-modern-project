import {Crop, CropYear} from "../../Models/Crop";
import {Link} from "react-router-dom";
import React from "react";

export function Dashboard() {
    // TODO: Use Date Ranges here
    const crops: Crop[] = [
        {
            name: 'Potato',
            image: new URL('https://image.com/potato'),
        },
        {
            name: 'Maize',
            image: new URL('https://image.com/maize'),
        },
        {
            name: 'Wheat',
            image: new URL('https://image.com/wheat'),
        },
    ]
    return (
        <div className="dashboard">
            <div className="CropSelection">
                <b>Crops:</b>
                {crops.map((crop) => {
                    return (
                        <Link to={'/crop/' + crop.name}>
                            <li>{crop.name}</li>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}