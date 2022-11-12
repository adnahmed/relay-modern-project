import {Crop} from "../../Models/Crop";
import {Link} from "react-router-dom";
import React, {FC, useState} from "react";
import useCropsStore from "../../Models/useCropsStore";
import onChangeInput from "../../util/onChangeInput";

export function Dashboard() {
    const crops = useCropsStore(state => state.values)
    const [showNewCropForm, setShowNewCropForm] = useState(false)
    const [cropName, setCropName] = useState('')
    const addCrop = useCropsStore(state => state.add)
    // const [cropImageSrc, setCropImageSrc] = useState('')
    const addNewCrop = () => {
        if (!showNewCropForm) setShowNewCropForm(true)
        else {
            addCrop({id: Math.random().toString(), name: cropName})
            setShowNewCropForm(false)
        }
    }

    return (
        <div className="dashboard">
            <button onClick={addNewCrop}>
                <b style={{color: 'blue'}}>Add New Crop</b>
            </button>
            {
                showNewCropForm
                    ?
                    <>
                        <label>
                            Name:
                            <input value={cropName} onChange={onChangeInput(setCropName)}/>
                        </label>
                        {/*<label>*/}
                        {/*    Crop Image:*/}
                        {/*    <input type="file" accept={".png, .jpg, .jpeg"} src={cropImageSrc}/>*/}
                        {/*</label>*/}
                    </>
                    :
                    <div className="CropSelection" style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex'}}>
                            <b style={{flex: '1'}}>Crops</b>
                        </div>
                        {crops.map(crop => (
                            <div style={{display: 'flex'}}>
                                <Link style={{flex: '1'}} to={'/crop/' + crop.name}>
                                    {crop.name}
                                </Link>
                            </div>
                        ))}
                    </div>
            }
        </div>
    )
}