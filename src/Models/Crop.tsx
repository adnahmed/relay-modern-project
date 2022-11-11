import React from "react";
import {useParams} from "react-router-dom";

export interface Crop {
    name: string
    image: URL
}

export function NoMatchCrop() {
    return (
        <>
            <p> No Matching Crop Found.</p>
        </>
    )
}

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
        </div>
    )
}