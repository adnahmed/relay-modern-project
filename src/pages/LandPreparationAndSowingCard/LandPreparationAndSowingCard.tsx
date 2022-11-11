import React, {useState} from 'react'
import {CellRow} from '../../Components/CellRow'
import CommonCostTableHeader from "../CommonCostTableHeader/CommonCostTableHeader";
export function LandPreparationAndSowingCard() {
    return (
        <>
            <CommonCostTableHeader />
            <CellRow cellStyle={{textAlign: 'left'}} style={{fontWeight: 'bold'}}
                     values={['Land Preparation (Own tractor and machinery)']}/>
            <CellRow values={['Land preparation (disk plough, cultivator, suhaga, chesil, rotavator)',
                <CellRow values={['', '']}/>, <CellRow values={['', '']}/>]}/>
            <CellRow values={['Planter', <CellRow values={['', '']}/>, <CellRow values={['', '']}/>]}/>
            <CellRow style={{fontWeight: 'bold'}} values={['Gross Land Preparation Cost', <CellRow values={['', '']}/>,
                <CellRow values={['', '']}/>]}/>
        </>
    )
}

