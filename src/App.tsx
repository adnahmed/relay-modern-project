import './App.css'
import React, { useRef, useState, useEffect } from 'react'
import Select, { Options } from 'react-select'
import { Routes, Route, Link, useParams, createRoutesFromElements, Outlet } from 'react-router-dom'
import { string } from 'yargs'
import _ from 'underscore.string'

interface Crop {
  name: string
  image: URL
}
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/crop/:cropName">
            <Route index element={<CropDashboard />} />
            <Route path="land-preparation-and-sowing" element={<LandPreparationAndSowing />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}
function Layout() {
  return (
    <div>
      <header>
        <nav>
          <NavBar />
        </nav>
        <FarmTitleBanner />
        <AppBanner />
      </header>
    <Outlet />
    </div>
  )
}
function LandPreparationAndSowing() {
  return <div>Land Preparation and Sowing</div>
}
interface Land {
  type: string | 'total'
  quantity?: LandQuantity
}
interface LandQuantity {
  value: number
  unit: LandUnit
}
enum LandUnit {
  acres,
}
function CropDashboard() {
  const [lastUpdated, setLastUpdated] = useState(new Date())
  const [sowingDate, setSowingDate] = useState(new Date())
  let urlParams = useParams()
  const varietyOptions = [
    { value: 'Mozeeka', label: 'Mozeeka' },
    { value: 'Somali', label: 'Somali' },
  ]
  const [selectedVariety, setSelectedVariety] = useState<{ value: string; label: string } | null>(varietyOptions[0])
  const handleChange = (selectedVariety) => {
    setSelectedVariety(selectedVariety)
  }
  const [land, setLand] = useState<Land>({ type: 'total', quantity: { value: 20, unit: LandUnit.acres } })
  return (
    <div className="dashboard">
      <CropYear />
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
        <Select value={selectedVariety} onChange={handleChange} options={varietyOptions} />
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
          <CellRow values={['Best Practices', 'Conventional Practices']} />
          <CellRow values={['5', '15']} />
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
/*
A stub interface, use react-props here.
*/
interface CellRowProps {
  values: string[]
}
function CellRow<CellRowProps>(props) {
  return (
    <div
      className="CellRow"
      style={{
        display: 'flex',
      }}
    >
      {props.values.map((p) => (
        <Cell flex="1 1 0" value={p} />
      ))}
    </div>
  )
}
function Cell(props) {
  return (
    <div
      className="Cell"
      style={{
        display: 'inline-block',
        textAlign: 'center',
        padding: '10px 5px',
        margin: '1px',
        borderWidth: '1px',
        fontWeight: props.isTextBold ? 'bold' : 'normal',
        flex: props.flex || 'auto',
      }}
    >
      {props.value}
    </div>
  )
}
function CropYear() {
  const yearStart = 2021
  const yearEnd = 2022
  return (
    <div className="YearRange">
      Year: {yearStart}-{yearEnd}
    </div>
  )
}
function Dashboard() {
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
      <CropYear />
      <div className="CropSelection">
        Crops:
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

function NavBar() {
  return (
    <div className="Navbar">
      <h2 className="NavbarElement NavbarTitle">Kauser's Farm</h2>
      <img className="NavbarElement NavbarImage" src="" alt="Farm Logo" />
    </div>
  )
}

function FarmTitleBanner(props) {
  return (
    <>
      <div className="FarmTitleBanner">
        <div className="FarmTitleBannerName">Kauser Model Agriculture Farm</div>
        <div className="FarmTitleBannerAddress">Jhambra Sharki, Mianwali</div>
      </div>
    </>
  )
}

function AppBanner(props) {
  return (
    <>
      <div className="AppBanner">
        <h1> KESAN DIARY </h1>
      </div>
    </>
  )
}
export default App
