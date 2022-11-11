import {Outlet, useParams} from "react-router-dom";
import React from "react";

export function CropYear() {
    const yearStart = 2021
    const yearEnd = 2022
    let urlParams = useParams()
    return (
        <div className="YearRange">
            <div style={{ display: 'flex', flex: '1', justifyContent: 'space-between'}}>
                <p>Cropping Year: {yearStart}-{yearEnd}</p>
                <p>Crop: {urlParams.cropName}</p>
            </div>
            <Outlet />
        </div>
    )
}
