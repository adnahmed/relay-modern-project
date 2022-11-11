import './App.css'
import React, {useEffect, useState} from 'react'
import {Link, Navigate, redirect, Route, Routes, useNavigate} from 'react-router-dom'
import {CropCard} from '../CropCard/CropCard'
import {LandPreparationAndSowingCard} from '../LandPreparationAndSowingCard/LandPreparationAndSowingCard'
import {NoMatchCrop} from '../../Models/Crop'
import {Dashboard} from '../Dashboard/Dashboard'
import {Layout} from '../../Layout/Layout'
import {NoMatch} from '../../Components/NoMatch'
import UnknownPage from "../UnknownPage/UnknownPage";
import RegisterationForm from "../RegisterationForm/RegisterationForm";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import HarvestAndPostHarvest from "../HarvestAndPostHarvest/HarvestAndPostHarvest";
import InputsCrop from "../InputsCrop/InputsCrop";
import Seed from "../Seed/Seed";
import Irrigation from "../Irrigation/Irrigation";
import FinanceOrCommentCard from "../FinanceOrCommentCard/FinanceOrCommendCard";
import {useFarmStore} from "../../Models/Farm";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    return (
        <div className="App">
            {isAuthenticated ? (
                /* Authenticated User */
                <Routes>
                    <Route path="/" element={<Layout/>} loader={() => {
                        if (!isAuthenticated) return redirect("/authentication")
                    }}>
                        <Route index element={<Dashboard/>}/>
                        <Route path="/crop/:cropName">
                            <Route index element={<CropCard/>}/>
                            <Route path="land-preparation-and-sowing/*"
                                   element={<FinanceOrCommentCard element={<LandPreparationAndSowingCard/>}/>}/>
                            <Route path="inputs">
                                <Route index element={<InputsCrop/>}/>
                                <Route path="seed/*" element={<FinanceOrCommentCard element={<Seed/>}/>}/>
                                <Route path="irrigation/*" element={<FinanceOrCommentCard element={<Irrigation/>}/>}/>
                                <Route path="*" element={<NoMatch/>}/>
                            </Route>
                            <Route path="harvesting-and-post-harvest" element={<HarvestAndPostHarvest/>}/>
                            <Route path="*" element={<NoMatchCrop/>}/>
                        </Route>
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>
                </Routes>
            ) : (
                /* Unauthenticated User */
                <Routes>
                    <Route path="/">
                        <Route index element={<IndexPage/>}/>
                        <Route path="/authentication">
                            <Route index element={<AuthenticationMethods/>}/>
                            <Route path="signin"
                                   element={<AuthenticationForm setIsAuthenticated={setIsAuthenticated}/>}/>
                            <Route path="signup"
                                   element={<RegisterationForm setIsAuthenticated={setIsAuthenticated}/>}/>
                            <Route path="*" element={<UnknownPage/>}/>
                        </Route>
                        <Route path="*" element={<UnknownPage/>}/>
                    </Route>
                </Routes>
            )}
        </div>
    )
}

const AuthenticationMethods = () => {
    return (<>
        <Link to="signin">Login</Link>
        <p>Don't yet have an account?</p>
        <Link to="signup">
            <button type="button">Sign Up</button>
        </Link>
    </>)
}


const IndexPage = () => {
    const farmName = useFarmStore(state => state.name)
    const farmAddress = useFarmStore(state => state.address)
    const farmLogo = useFarmStore(state => state.logo)
    const setFarmAddress = useFarmStore(state => state.setFarmAddress)
    const setFarmName = useFarmStore(state => state.setFarmName)
    const setFarmLogo = useFarmStore(state => state.setFarmLogo)
    const [goNext, setGoNext] = useState(false)
    useEffect(() => {
        if (farmName !== '' && farmAddress !== '') {
            setGoNext(true)
        } else setGoNext(false)
    })
    return (
        <div>
            <img src={farmLogo} style={{width: '100px', height: '100px', float: 'right', borderWidth: '1px'}}
                 alt="KMAF"/>
            <form style={{clear: 'left'}}>
                <label>
                    <p>Farm Name</p>
                    <input value={farmName} required style={{width: '100%'}}
                           placeholder="Please enter your Farm Name:"
                           onChange={setFarmName}></input>
                </label>
                <label>
                    Farm Address
                    <input value={farmAddress} required style={{width: '100%'}}
                           placeholder="Please enter your Farm Address:"
                           onChange={setFarmAddress}></input>
                </label>
                <br/>
                <button><Link to={goNext ? "/authentication" : "#"}>Go Next</Link></button>
            </form>
            <h1 style={{margin: '3em', textAlign: 'center', width: '100%', fontWeight: 'bold'}}>KESAN DIARY</h1>
        </div>
    )
}
export default App