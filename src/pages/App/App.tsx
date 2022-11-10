import './App.css'
import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CropCard } from '../CropCard/CropCard'
import { LandPreparationAndSowingCard } from '../LandPreparationAndSowingCard/LandPreparationAndSowingCard'
import { NoMatchCrop } from '../../Models/Crop'
import { Dashboard } from '../Dashboard/Dashboard'
import { Layout } from '../../Layout/Layout'
import { NoMatch } from '../../Components/NoMatch'
import UnknownPage from "../UnknownPage/UnknownPage";
import RegisterationForm from "../RegisterationForm/RegisterationForm";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import HarvestAndPostHarvest from "../HarvestAndPostHarvest/HarvestAndPostHarvest";
import InputsCrop from "../InputsCrop/InputsCrop";
import Seed from "../Seed/Seed";
import Irrigation from "../Irrigation/Irrigation";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return (
    <div className="App">
      {isAuthenticated ? (
        /* Authenticated User */
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="/crop/:cropName">
              <Route index element={<CropCard />} />
              <Route path="land-preparation-and-sowing" element={<LandPreparationAndSowingCard />} />
              <Route path="inputs">
                <Route index element={<InputsCrop />} />
                <Route path="seed" element={<Seed />} />
                <Route path="irrigation" element={<Irrigation />} />
                <Route path="*" element={<NoMatch />} />
              </Route>
              <Route path="harvesting-and-post-harvest" element={<HarvestAndPostHarvest />} />
              <Route path="*" element={<NoMatchCrop />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      ) : (
        /* Unauthenticated User */
        <Routes>
          <Route path="/">
            <Route index element={<AuthenticationForm setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/signup" element={<RegisterationForm setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="*" element={<UnknownPage />} />
          </Route>
        </Routes>
      )}
    </div>
  )
}
export default App
