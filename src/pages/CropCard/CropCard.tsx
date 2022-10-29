import React, {useState} from "react";
import {Link, useParams} from "react-router-dom";
import Select from "react-select";
import {CropYear} from "../../Models/Crop";
import Land from "../../Models/Land";
import {CellRow} from "../../Components/CellRow";
import {LandUnit} from "../../Models/LandUnit";
import _ from 'underscore.string'

export function CropCard() {
    const [lastUpdated, setLastUpdated] = useState(new Date())
    const [sowingDate, setSowingDate] = useState(new Date())
    let urlParams = useParams()
    const varietyOptions = [
        {value: 'Mozeeka', label: 'Mozeeka'},
        {value: 'Somali', label: 'Somali'},
    ]
    const [selectedVariety, setSelectedVariety] = useState<{ value: string; label: string } | null>(varietyOptions[0])
    const handleChange = (selectedVariety) => {
        setSelectedVariety(selectedVariety)
    }
    const [land, setLand] = useState<Land>({type: 'total', quantity: {value: 20, unit: LandUnit.acres}})
    return (
        <div className="dashboard">
            <CropYear/>
            <div className="CropName">Crop: {urlParams.cropName}</div>
            <div className="Date LastUpdated">
                Updated On:
                {lastUpdated.toString()}
            </div>
            <div className="Date SowingDate">
                Date of Sowing:
                {sowingDate.toString()}
            </div>
            <div className="CropVariety">
                Variety:
                <Select value={selectedVariety} onChange={handleChange} options={varietyOptions}/>
            </div>
            <div id="total-land">
                Total Land:
                {land.quantity?.value} {_.capitalize(LandUnit[land.quantity?.unit || 0])}
            </div>
            <div
                style={{
                    padding: '1%',
                }}
                id="land-under-crop"
            >
                Land under crop:
                <div className="CellTable">
                    <CellRow values={['Best Practices', 'Conventional Practices']}/>
                    <CellRow values={['5', '15']}/>
                </div>
            </div>
            Contents:
            <ul className="content-list"/>
            <li>
                <Link to="land-preparation-and-sowing">Land Preparation And Sowing </Link>
            </li>
            <li>
                <Link to="inputs">Inputs</Link>
            </li>
            <li>
                <Link to="irrigation">Irrigation</Link>
            </li>
            <li>
                <Link to="nutrients">Nutrients</Link>
            </li>
            <li>
                <Link to="integrated-pest-and-diseasemanagement">Integrated Pest and Disease Management</Link>
            </li>
            <li>
                <Link to="harvesting">Harvesting</Link>
            </li>
            <li>
                <Link to="postharvest">Post Harvest</Link>
            </li>
            <li>
                <Link to="marketing">Marketing</Link>
            </li>
            <li>
                <Link to="all-costs">All Costs</Link>
            </li>
        </div>
    )
}