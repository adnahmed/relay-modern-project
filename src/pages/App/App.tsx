import './App.css'
import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import { CropCard } from '../CropCard/CropCard'
import { LandPreparationAndSowingCard } from '../LandPreparationAndSowingCard/LandPreparationAndSowingCard'
import { NoMatchCrop } from '../../Models/Crop'
import { Dashboard } from '../Dashboard/Dashboard'
import { Layout } from '../../Layout/Layout'
import { NoMatch } from '../../Components/NoMatch'
import onChangeInput from '../../util/onChangeInput'

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
            <Route index element={<AuthenticationForm />} />
            <Route path="/signup" element={<RegisterationForm />} />
            <Route path="*" element={<UnknownPage />} />
          </Route>
        </Routes>
      )}
    </div>
  )
}

function RegisterationForm() {
  const [name, setName] = useState('')
  
  return (<>
    <form action="post">
      <fieldset>
        <legend>Registeration Form</legend>
        <label>
          Name
          <input type="text" value={name} onChange={onChangeInput(setName)} required placeholder="Enter your Name" />
        </label>
      </fieldset>
    </form>
    <Link to="/"><button>Go Back</button></Link>
  </>)
}

function UnknownPage() {
  return (<div>Uh oh! You've landed in an unfamiliar terriotory
    <Link to="/"><button>Go to a Safe Place</button></Link>
  </div>)
}

function AuthenticationForm() {
  const [password, setPassword] = useState('')
  const [userID, setUserID] = useState('')
  return (
    <form method="get">
      <fieldset>
        <legend>Authentication</legend>
        <label>
          Email / Username
          <input placeholder="Enter your Email or Username" name="UserID" onChange={onChangeInput(setUserID)} required value={userID} type="text"></input>
        </label>
        <label>
          Password
          <input placeholder="Enter your password" name="User Password" onChange={onChangeInput(setPassword)} required value={password} type="password"></input>
        </label>
      </fieldset>
      <button>Login</button>
      <div>
        <p>Don't yet have an account?</p>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    </form>
  )
}
export default App
