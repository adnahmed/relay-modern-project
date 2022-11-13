import './App.css'
import React, {useState} from 'react'
import {Outlet, redirect, Route, Routes} from 'react-router-dom'
import {CropCard} from '../CropCard/CropCard'
import {LandPreparation} from '../LandPreparation/LandPreparation'
import {Dashboard} from '../Dashboard/Dashboard'
import {Layout} from '../../Layout/Layout'
import {NoMatch} from '../../Components/NoMatch'
import UnknownPage from "../UnknownPage/UnknownPage";
import RegistrationForm from "../RegisterationForm/RegisterationForm";
import AuthenticationForm from "../AuthenticationForm/AuthenticationForm";
import InputsCrop from "../InputsCrop/InputsCrop";
import Seed from "../Seed/Seed";
import Irrigation from "../Irrigation/Irrigation";
import TopicDashboard from "../TopicDashboard/TopicDashboard";
import General from "../General/General";
import NoMatchCrop from "../NoMatchCrop/NoMatchCrop";
import { CropYear, CropType } from '../../Components/CropYear';
import Sowing from "../Sowing/Sowing";
import LaborManagement from "../LaborManagement/LaborManagement";
import IntegratedPestManagement from "../IntegratedPestManagement/IntegratedPestManagement";
import IntegratedDiseaseManagement from "../IntegratedDiseaseManagement/IntegratedDiseaseManagement";
import IntegratedWeedManagement from "../IntegratedWeedManagement/IntegratedWeedManagement";
import NutrientManagement from "../NutrientManagement/NutrientManagement";
import GrossInputsCost from "../GrossInputsCost/GrossInputsCost";
import Harvesting from "../Harvesting/Harvesting";
import PostHarvesting from "../PostHarvesting/PostHarvesting";
import Marketing from "../Marketing/Marketing";
import AllCosts from "../AllCosts/AllCosts";
import EconomicAnalysis from "../EconomicAnalysis/EconomicAnalysis";
import AuthenticationMethods from "../AuthenticationMethods/AuthenticationMethods";
import IndexPage from "../IndexPage/IndexPage";
import TableHead from "../../Components/TableHead";
import {HarvestDate} from "../../Components/HarvestDate";
import GeneralInformation from "../GeneralInformation/GeneralInformation";
import YearSelect from '../YearSelect/YearSelect'

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
                        <Route index element={<GeneralInformation/>}/>
                        <Route index path="dashboard" element={<Dashboard/>}/>
                            <Route path="crop/:cropName" element={<><CropType /><Outlet /></>}>
                            <Route index element={<YearSelect/>}/>
                            <Route path="year/:yearStart/:yearEnd" element={<> <CropYear /> <Outlet /></>} >
                                <Route index element={<CropCard/>}/>
                                <Route path="general-information/*" element={<General />} />
                                <Route path="land-preparation/*" element={<TopicDashboard element={<TableHead><LandPreparation/></TableHead>}/>}/>
                                <Route path="sowing/*" element={<TopicDashboard element={<TableHead><Sowing/></TableHead>}/>}/>
                                <Route path="inputs/*">
                                    <Route index element={<InputsCrop/>}/>
                                    <Route path="seed/*" element={<TopicDashboard element={<TableHead><Seed/></TableHead>}/>}/>
                                    <Route path="irrigation/*" element={<TopicDashboard element={<TableHead><Irrigation/></TableHead>}/>}/>
                                    <Route path="labor-management/*" element={<TopicDashboard element={<TableHead><LaborManagement/></TableHead>}/>}/>
                                    <Route path="integrated-pest-management/*" element={<TopicDashboard element={<TableHead><IntegratedPestManagement/></TableHead>}/>}/>
                                    <Route path="integrated-disease-management/*" element={<TopicDashboard element={<TableHead><IntegratedDiseaseManagement/></TableHead>}/>}/>
                                    <Route path="integrated-weed-management/*" element={<TopicDashboard element={<TableHead><IntegratedWeedManagement/></TableHead>}/>}/>
                                    <Route path="nutrient-management/*" element={<TopicDashboard element={<TableHead><NutrientManagement/></TableHead>}/>}/>
                                    <Route path="gross-inputs-cost/*" element={<TopicDashboard element={<TableHead><GrossInputsCost/></TableHead>}/>}/>
                                    <Route path="*" element={<NoMatch/>}/>
                                </Route>
                                <Route path="harvesting/*" element={<HarvestDate />}>
                                    <Route path="*" index element={<TopicDashboard element={<TableHead><Harvesting/></TableHead>}/>}/>
                                </Route>
                                <Route path="post-harvesting-and-storage/*" element={<TopicDashboard element={<TableHead><PostHarvesting/></TableHead>}/>}/>
                                <Route path="marketing/*" element={<TopicDashboard element={<TableHead><Marketing/></TableHead>}/>}/>
                                <Route path="all-costs/*" element={<TopicDashboard element={<TableHead><AllCosts/></TableHead>}/>}/>
                                <Route path="economic-analysis/*" element={<TopicDashboard element={<EconomicAnalysis/>}/>}/>
                                <Route path="*" element={<NoMatchCrop/>}/>
                        </Route>
                        </Route>
                        <Route path="*" element={<NoMatch/>}/>
                    </Route>
                </Routes>
            ) : (
                /* Unauthenticated User */
                <Routes>
                    <Route path="/">
                        <Route index element={<IndexPage/>}/>
                        <Route path="/authentication" element={<Layout />}>
                            <Route index element={<AuthenticationMethods/>}/>
                            <Route path="signin"
                                   element={<AuthenticationForm setIsAuthenticated={setIsAuthenticated}/>}/>
                            <Route path="signup"
                                   element={<RegistrationForm setIsAuthenticated={setIsAuthenticated}/>}/>
                            <Route path="*" element={<UnknownPage/>}/>
                        </Route>
                        <Route path="*" element={<UnknownPage/>}/>
                    </Route>
                </Routes>
            )}
        </div>
    )
}

export default App