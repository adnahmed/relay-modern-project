import {Link} from "react-router-dom";
import React, {FC, useEffect, useState} from "react";
import useCropsStore from "../../Models/useCropsStore";
import onChangeInput from "../../util/onChangeInput";
import potato from './potato.jpg'
import maize from './maize.jpg'
import wheat from './wheat.webp'

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
            {
                !showNewCropForm ?
                    <button style={{color: 'blue', borderWidth: '2px', borderRadius: '1em', padding: '15px', textAlign: 'center', marginRight: '3em', paddingBottom: '1em' }} onClick={addNewCrop}>
                        <b style={{color: 'blue'}}>New Crop</b>
                    </button> : <></>
            }
            {
                showNewCropForm
                    ?
                    <>
                        <label style={{display: 'inline-block'}}>
                            Crop Name:
                            <input style={{borderWidth: '3px'}} value={cropName} onChange={onChangeInput(setCropName)}/>
                        </label>
                        <button style={{color: 'blue', display: 'inline-block', borderWidth: '1px', padding: '4px'}}
                                onClick={addNewCrop}>Save
                        </button>
                    </>
                    : <></>
            }
            <div className="CropSelection" style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex'}}>
                    <b style={{flex: '1', color: 'green', fontSize: 'xxx-large'}}>Crops</b>
                </div>
                {crops.map(crop => (
                    <div id='dashboard-table' style={{display: 'flex'}}>
                        <div id='dashboard-table-row' style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignContent: 'space-between',
                            flex: '1',
                            maxWidth: '300px',
                            alignItems: 'center'
                        }}>
                            <Link style={{color: 'blue', borderWidth: '2px', borderRadius: '1em', padding: '15px', textAlign: 'center', marginRight: '3em'}}
                                  to={'/crop/' + crop.name}>
                                {crop.name}
                            </Link>
                            <img style={{display: 'inline', borderWidth: '1px', maxHeight: '200px'}}
                                 alt={crop.name + ' Image'}
                                 src={crop.name.toLowerCase() === "potato" ? potato : crop.name.toLowerCase() === "wheat" ? wheat : crop.name.toLowerCase() === "maize" ? maize : (crop.name + " Image")}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}