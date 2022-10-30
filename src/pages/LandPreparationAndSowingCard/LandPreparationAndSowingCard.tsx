import React from 'react'
import { CellRow } from '../../Components/CellRow'
export function LandPreparationAndSowingCard() {
  return (
    <>
      <CellRow style={{ fontWeight: 'bold' }} values={['Operation/Activity', 'Best Practices', 'Conventional Practices']} />
      <CellRow values={['']} />
      <CellRow values={[`Total Land (${'land'})`, `${'bestPracticesLand'}`, `${'conv.Land'}`]} />
      <CellRow style={{ fontWeight: 'bold' }} values={['', <CellRow values={['Quantity', 'Total Cost PKR']} />, <CellRow values={['Quantity', 'Total Cost PKR']} />]} />
      <CellRow cellStyle={{ textAlign: 'left' }} style={{ fontWeight: 'bold' }} values={['A. Land Preparation (Own tractor and machinery)']} />
      <CellRow values={['Land preparation (disk plough, cultivator, suhaga, chesil, rotavator)', <CellRow values={['', '']} />, <CellRow values={['', '']} />]} />
      <CellRow values={['Planter', <CellRow values={['', '']} />, <CellRow values={['', '']} />]} />
      <CellRow style={{ fontWeight: 'bold'}} values={['Gross Land Preparation Cost', <CellRow values={['', '']} />, <CellRow values={['', '']} />]} />
    </>
  )
}
