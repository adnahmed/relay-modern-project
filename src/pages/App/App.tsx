import './App.css'
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {CropCard} from "../CropCard/CropCard";
import {LandPreparationAndSowingCard} from "../LandPreparationAndSowingCard/LandPreparationAndSowingCard";
import {NoMatchCrop} from "../../Models/Crop";
import {Dashboard} from "../Dashboard/Dashboard";
import {Layout} from "../../Layout/Layout";
import {NoMatch} from "../../Components/NoMatch";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/crop/:cropName">
            <Route index element={<CropCard />} />
            <Route path="land-preparation-and-sowing" element={<LandPreparationAndSowingCard />} />
            <Route path="*" element={<NoMatchCrop />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}


export default App
