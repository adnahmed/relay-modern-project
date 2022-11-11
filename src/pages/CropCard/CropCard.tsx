import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Select from 'react-select'
import { CropYear } from '../../Models/Crop'
import { Land, LandUnit } from '../../Models/Land'
import { CellRow } from '../../Components/CellRow'
export function CropCard() {
  const [lastUpdated] = useState(new Date())
  const [sowingDate] = useState(new Date())
  const varietyOptions = [
    { value: 'Mozeeka', label: 'Mozeeka' },
    { value: 'Somali', label: 'Somali' },
  ]
  const [selectedVariety, setSelectedVariety] = useState<{ value: string; label: string } | null>(varietyOptions[0])
  const handleChange = (selectedVariety) => {
    setSelectedVariety(selectedVariety)
  }
  const [land] = useState<Land>({ type: 'total', quantity: { value: 20, unit: LandUnit.acres } })
  const [lands] = useState<Land[]>([
    { type: 'Best Practices', quantity: { value: 5, unit: LandUnit.acres } },
    { type: 'Conventional', quantity: { value: 15, unit: LandUnit.acres } },
  ])
  return (
    <div className="dashboard">
        <b>General Information</b>
      <div className="Date LastUpdated">
        Updated On:
        {lastUpdated.toLocaleDateString()}
      </div>
      <div className="Date SowingDate">
        Date of Sowing:
        {sowingDate.toLocaleDateString()}
      </div>
      <div className="CropVariety">
        Variety:
        <Select value={selectedVariety} onChange={handleChange} options={varietyOptions} />
      </div>
      <div id="total-land">
        Total Land:
        {land.quantity?.value} {land.quantity?.unit}
      </div>
      <div
        style={{
          padding: '1%',
        }}
        id="land-under-crop"
      >
        Land under crop:
        <div className="CellTable">
          {
            <CellRow
              values={lands.map((l) => (
                <CellRow isVertical values={[l.type, l.quantity?.value + ' ' + l.quantity?.unit]} />
              ))}
            />
          }
        </div>
      </div>
      Contents:
      <ul className="content-list" />
      <li>
        <Link to="land-preparation-and-sowing">Land Preparation And Sowing </Link>
      </li>
      <li>
        <Link to="inputs">Inputs</Link>
      </li>
        <li>
            <Link to="harvesting-and-post-harvest">Harvesting</Link>
        </li>
        <li>
        <Link to="integrated-pest-and-disease-management">Integrated Pest and Disease Management</Link>
      </li>
     <li>
        <Link to="post-harvest">Post Harvest</Link>
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
