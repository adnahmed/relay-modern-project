import './App.css'
import React, { useState, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CropCard } from '../CropCard/CropCard'
import { LandPreparationAndSowingCard } from '../LandPreparationAndSowingCard/LandPreparationAndSowingCard'
import { NoMatchCrop } from '../../Models/Crop'
import { Dashboard } from '../Dashboard/Dashboard'
import { Layout } from '../../Layout/Layout'
import { NoMatch } from '../../Components/NoMatch'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword]=useState("")
  return (
    <div className="App">
      {isAuthenticated ? (
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
      ) : (
        // <AuthenticationForm />
        <div>
          <form method="get">
            <fieldset>
              <legend>Authentication</legend>
              <label>
                Email
                <input placeholder="Enter your email" name="User Email" required value="" type="text"></input>
              </label>
              <label>
                Password
                <input placeholder="Enter your password" name="User Password" required value={password} type="password"></input>
              </label>
            </fieldset>
            <button>Login</button>
          </form>
        </div>
      )}
    </div>
  )
}

function AuthenticationForm() {
  return (
    <div className="Form AuthenticationForm">
      <form target="/">
        <input type={'text'}>Please Enter Email.</input>
      </form>
    </div>
  )
}
export default App
