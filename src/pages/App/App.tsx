import './App.scss'
import { Outlet, Route, Routes } from 'react-router-dom'
import CropCard from '../CropCard/CropCard'
import LandPreparation from '../LandPreparation/LandPreparation'
import Dashboard from '../Dashboard/Dashboard'
import { Layout } from '../../Layout/Layout'
import NoMatch from '../NoMatch/NoMatch'
import UnknownPage from '../UnknownPage/UnknownPage'
import InputsCrop from '../InputsCrop/InputsCrop'
import Seed from '../Seed/Seed'
import Irrigation from '../Irrigation/Irrigation'
import TopicDashboard from '../TopicDashboard/TopicDashboard'
import General from '../General/General'
import NoMatchCrop from '../NoMatchCrop/NoMatchCrop'
import { CropType, CropYear } from '../CropYear/CropYear'
import Sowing from '../Sowing/Sowing'
import LaborManagement from '../LaborManagement/LaborManagement'
import IntegratedPestManagement from '../IntegratedPestManagement/IntegratedPestManagement'
import IntegratedDiseaseManagement from '../IntegratedDiseaseManagement/IntegratedDiseaseManagement'
import IntegratedWeedManagement from '../IntegratedWeedManagement/IntegratedWeedManagement'
import NutrientManagement from '../NutrientManagement/NutrientManagement'
import GrossInputsCost from '../GrossInputsCost/GrossInputsCost'
import Harvesting from '../Harvesting/Harvesting'
import PostHarvesting from '../PostHarvesting/PostHarvesting'
import Marketing from '../Marketing/Marketing'
import AllCosts from '../AllCosts/AllCosts'
import EconomicAnalysis from '../EconomicAnalysis/EconomicAnalysis'
import IndexPage from '../IndexPage/IndexPage'
import TableHead from '../TableHead/TableHead'
import HarvestDate from '../HarvestDate/HarvestDate'
import GeneralInformation from '../GeneralInformation/GeneralInformation'
import YearSelect from '../YearSelect/YearSelect'
import SignUpForm from '../../Components/SignupForm/SignupForm'
import SignInForm from '../../Components/SigninForm/SigninForm'
import AdministratorDashboard from '../../Components/AdministratorDashboard/AdministratorDashboard'
import ManageAlerts from '../../Components/ManageAlerts/ManageAlerts'
import { useCookies } from 'react-cookie'
import { FC } from 'react'

interface AppProps {}

/**
 *
 * Administrator and Farmer create accounts.
 - Farmer adds description and Location of Land.
 - Crops get recommended for current season and Land Description.
 *
 */

const App: FC<AppProps> = (props) => {
  const [cookies] = useCookies(['uid'])
  if (cookies.uid)
    // TODO: Fetch User Here if success then ... else ...
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<GeneralInformation />} />
            <Route index path="dashboard" element={<Dashboard />} />
            <Route
              path="crop/:cropName"
              element={
                <>
                  <CropType />
                  <Outlet />
                </>
              }
            >
              <Route index element={<YearSelect />} />
              <Route
                path="year/:yearStart/:yearEnd"
                element={
                  <>
                    {' '}
                    <CropYear /> <Outlet />
                  </>
                }
              >
                <Route index element={<CropCard />} />
                <Route path="general-information/*" element={<General />} />
                <Route
                  path="land-preparation/*"
                  element={
                    <TopicDashboard
                      element={
                        <TableHead>
                          <LandPreparation />
                        </TableHead>
                      }
                    />
                  }
                />
                <Route
                  path="sowing/*"
                  element={
                    <TopicDashboard
                      element={
                        <TableHead>
                          <Sowing />
                        </TableHead>
                      }
                    />
                  }
                />
                <Route path="inputs/*">
                  <Route index element={<InputsCrop />} />
                  <Route
                    path="seed/*"
                    element={
                      <TopicDashboard
                        element={
                          <TableHead>
                            <Seed />
                          </TableHead>
                        }
                      />
                    }
                  />
                  <Route
                    path="irrigation/*"
                    element={
                      <TopicDashboard
                        element={
                          <TableHead>
                            <Irrigation />
                          </TableHead>
                        }
                      />
                    }
                  />
                  <Route
                    path="labor-management/*"
                    element={
                      <TopicDashboard
                        element={
                          <TableHead>
                            <LaborManagement />
                          </TableHead>
                        }
                      />
                    }
                  />
                  <Route
                    path="integrated-pest-management/*"
                    element={
                      <TopicDashboard
                        element={
                          <TableHead>
                            <IntegratedPestManagement />
                          </TableHead>
                        }
                      />
                    }
                  />
                  <Route
                    path="integrated-disease-management/*"
                    element={
                      <TopicDashboard
                        element={
                          <TableHead>
                            <IntegratedDiseaseManagement />
                          </TableHead>
                        }
                      />
                    }
                  />
                  <Route
                    path="integrated-weed-management/*"
                    element={
                      <TopicDashboard
                        element={
                          <TableHead>
                            <IntegratedWeedManagement />
                          </TableHead>
                        }
                      />
                    }
                  />
                  <Route
                    path="nutrient-management/*"
                    element={
                      <TopicDashboard
                        element={
                          <TableHead>
                            <NutrientManagement />
                          </TableHead>
                        }
                      />
                    }
                  />
                  <Route
                    path="gross-inputs-cost/*"
                    element={
                      <TopicDashboard
                        element={
                          <TableHead>
                            <GrossInputsCost />
                          </TableHead>
                        }
                      />
                    }
                  />
                  <Route path="*" element={<NoMatch />} />
                </Route>
                <Route path="harvesting/*" element={<HarvestDate />}>
                  <Route
                    path="*"
                    index
                    element={
                      <TopicDashboard
                        element={
                          <TableHead>
                            <Harvesting />
                          </TableHead>
                        }
                      />
                    }
                  />
                </Route>
                <Route
                  path="post-harvesting-and-storage/*"
                  element={
                    <TopicDashboard
                      element={
                        <TableHead>
                          <PostHarvesting />
                        </TableHead>
                      }
                    />
                  }
                />
                <Route
                  path="marketing/*"
                  element={
                    <TopicDashboard
                      element={
                        <TableHead>
                          <Marketing />
                        </TableHead>
                      }
                    />
                  }
                />
                <Route
                  path="all-costs/*"
                  element={
                    <TopicDashboard
                      element={
                        <TableHead>
                          <AllCosts />
                        </TableHead>
                      }
                    />
                  }
                />
                <Route path="economic-analysis/*" element={<TopicDashboard element={<EconomicAnalysis />} />} />
                <Route path="*" element={<NoMatchCrop />} />
              </Route>
            </Route>
            <Route path="/admin/*" loader={(args) => {}}>
              <Route index element={<AdministratorDashboard />} />
              <Route path="alerts" element={<ManageAlerts />} />
            </Route>
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </>
    )
  else
    return (
      <Routes>
        <Route path="/">
          <Route index element={<IndexPage />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="*" element={<UnknownPage />} />
        </Route>
      </Routes>
    )
}

export default App
