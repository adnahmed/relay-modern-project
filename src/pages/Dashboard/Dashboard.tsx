import { Link } from 'react-router-dom'
import { useState } from 'react'
import useCropsStore from '../../Models/useCropsStore'
import onChangeInput from '../../Types/onChangeInput'
import potato from './potato.jpg'
import maize from './maize.jpg'
import wheat from './wheat.webp'
import GlowyButton from '../GlowyButton/GlowyButton'
import { Crop } from '../../Models/Crop'
export interface DashboardProps {}
export default function Dashboard(props: DashboardProps) {
  const crops: Crop[] = [
    {
      id: '1',
      fullName: 'Potato',
      landOccupied: 8,
    },
    {
      id: '2',
      fullName: 'Maize',
      landOccupied: 7
    },
    {
      id: '3',
      fullName: 'Wheat',
      landOccupied: 4
    },
  ]
  //   const crops = useCropsStore((state) => state.values)
  const [showNewCropForm, setShowNewCropForm] = useState(false)
  const [cropName, setCropName] = useState('')
  const addCrop = useCropsStore((state) => state.add)
  const addNewCrop = () => {
    if (!showNewCropForm) setShowNewCropForm(true)
    else {
      addCrop({ id: Math.random().toString(), fullName: cropName, landOccupied: 7 })
      setShowNewCropForm(false)
    }
  }
  return (
    <div className="dashboard">
      {!showNewCropForm ? (
        <button onClick={addNewCrop}>
          <GlowyButton>
            <b style={{ color: 'blue' }}>Add New Crop</b>
          </GlowyButton>
        </button>
      ) : (
        <></>
      )}
      {showNewCropForm ? (
        <>
          <label style={{ display: 'inline-block' }}>
            Crop Name:
            <input style={{ borderWidth: '3px' }} value={cropName} onChange={onChangeInput(setCropName)} />
          </label>
          <button onClick={addNewCrop}>
            <GlowyButton>Save</GlowyButton>
          </button>
        </>
      ) : (
        <></>
      )}
      <div className="CropSelection" style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          <b style={{ flex: '1', color: 'green', fontSize: 'xxx-large' }}>Crops</b>
        </div>
        {crops.map((crop) => (
          <div id="dashboard-table" style={{ display: 'flex' }}>
            <div
              id="dashboard-table-row"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignContent: 'space-between',
                flex: '1',
                maxWidth: '300px',
                alignItems: 'center',
              }}
            >
              <GlowyButton>
                <Link to={'/crop/' + crop.fullName}>{crop.fullName}</Link>
              </GlowyButton>
              <img
                style={{ display: 'inline', borderWidth: '1px', maxHeight: '200px' }}
                alt={crop.fullName + ' Image'}
                src={crop.fullName.toLowerCase() === 'potato' ? potato : crop.fullName.toLowerCase() === 'wheat' ? wheat : crop.fullName.toLowerCase() === 'maize' ? maize : crop.fullName + ' Image'}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
