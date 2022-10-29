import React from "react";

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
    return (
        <div className="YearRange">
            Year: {yearStart}-{yearEnd}
        </div>
    )
}