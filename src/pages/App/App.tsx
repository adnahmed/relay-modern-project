import './App.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { CropCard } from '../CropCard/CropCard'
import { LandPreparationAndSowingCard } from '../LandPreparationAndSowingCard/LandPreparationAndSowingCard'
import { NoMatchCrop } from '../../Models/Crop'
import { Dashboard } from '../Dashboard/Dashboard'
import { Layout } from '../../Layout/Layout'
import { NoMatch } from '../../Components/NoMatch'
import onChangeInput from '../../util/onChangeInput'
import UnknownPage from "../UnknownPage/UnknownPage";
import RegisterationForm from "../RegisterationForm/RegisterationForm";

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

function AuthenticationForm(props) {
  const [password, setPassword] = useState('')
  const [userID, setUserID] = useState('')
  return (
    <form method="get" onSubmit={() => props.setIsAuthenticated(true)}>
      <fieldset>
        <legend>Authentication</legend>
        <label>
          Email / Username
          <input placeholder="Enter your Email or Username" name="UserID" onChange={onChangeInput(setUserID)} required value={userID} autoFocus type="text"></input>
        </label>
        <label>
          Password
          <input placeholder="Enter your password" name="User Password" onChange={onChangeInput(setPassword)} required value={password} type="password"></input>
        </label>
      </fieldset>
      <button type="submit">
        Login
      </button>
      <div>
        <p>Don't yet have an account?</p>
        <Link to="/signup">
          <button type="button">Sign Up</button>
        </Link>
      </div>
    </form>
  )
}
export default App
