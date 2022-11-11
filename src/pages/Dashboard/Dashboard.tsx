import {Crop} from "../../Models/Crop";
import {Link} from "react-router-dom";
import React from "react";
import useCropsStore from "../../Models/useCropsStore";

export function Dashboard() {
    const crops = useCropsStore(state => state.crops)
    const addCrop = useCropsStore()
    return (
        <div className="dashboard">
            <button onClick={}>
                <b>Add New</b>
            </button>
            <div className="CropSelection" style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex'}}>
                    <b style={{flex: '1'}}>Crops</b>
                    <b style={{flex: '2'}}>Cropping Year Start</b>
                    <b style={{flex: '2'}}>Cropping Year End</b>
                </div>
                {crops.map((crop) => {
                    return (
                        <div style={{display: 'flex'}}>
                            <Link style={{flex: '1'}} to={'/crop/' + crop.name}>
                                {crop.name}
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}