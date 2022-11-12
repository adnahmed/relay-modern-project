import React, {FC} from 'react';
import './AllCosts.scss';
import {LandPreparation} from "../LandPreparation/LandPreparation";
import Sowing from "../Sowing/Sowing";
import Seed from "../Seed/Seed";
import Irrigation from "../Irrigation/Irrigation";
import {CellRow} from "../../Components/CellRow";
import LaborManagement from "../LaborManagement/LaborManagement";
import IntegratedPestManagement from "../IntegratedPestManagement/IntegratedPestManagement";
import IntegratedDiseaseManagement from "../IntegratedDiseaseManagement/IntegratedDiseaseManagement";
import IntegratedWeedManagement from "../IntegratedWeedManagement/IntegratedWeedManagement";
import NutrientManagement from "../NutrientManagement/NutrientManagement";
import GrossInputsCost from "../GrossInputsCost/GrossInputsCost";
import Harvesting from "../Harvesting/Harvesting";
import PostHarvesting from "../PostHarvesting/PostHarvesting";
import Marketing from "../Marketing/Marketing";

interface AllCostsProps {
}

const AllCosts: FC<AllCostsProps> = () => (
    <div className="AllCosts">
        <LandPreparation/>
        <Sowing/>
        <CellRow values={['Inputs']} cellStyle={{textAlign: 'left'}} style={{fontWeight: 'bold'}}/>
        <Seed/>
        <Irrigation/>
        <LaborManagement/>
        <IntegratedPestManagement/>
        <IntegratedDiseaseManagement/>
        <IntegratedWeedManagement/>
        <NutrientManagement/>
        <GrossInputsCost/>
        <Harvesting/>
        <PostHarvesting/>
        <Marketing/>
        <CellRow values={['Total Cost of Production and Marketing', <CellRow values={['', '']}/>,
            <CellRow values={['', '']}/>]} cellStyle={{textAlign: 'left'}} style={{fontWeight: 'bold'}}/>
        <CellRow values={['Price per Kg (Rs)', <CellRow values={['', '']}/>, <CellRow values={['', '']}/>]}
                 cellStyle={{textAlign: 'left'}} style={{fontWeight: 'bold'}}/>
        <CellRow values={['A Quality Price Per Kg (Rs)', <CellRow values={['', '']}/>, <CellRow values={['', '']}/>]}/>
        <CellRow values={['B Quality Price Per Kg (Rs)', <CellRow values={['', '']}/>, <CellRow values={['', '']}/>]}/>
        <CellRow values={['Mix (C) Price Per Kg (Rs)', <CellRow values={['', '']}/>, <CellRow values={['', '']}/>]}/>
        <CellRow values={['Seed (D) Price Per Kg (Rs)', <CellRow values={['', '']}/>, <CellRow values={['', '']}/>]}/>
        <CellRow cellStyle={{textAlign: 'left'}} style={{fontWeight: 'bold'}} values={['Total revenue generated (Rs)', <CellRow values={['', '']}/>, <CellRow values={['', '']}/>]}/>
            <CellRow cellStyle={{textAlign: 'left'}} style={{fontWeight: 'bold'}} values={['Gross Profit (Rs)', <CellRow values={['', '']}/>, <CellRow values={['', '']}/>]}/>
    </div>
);

export default AllCosts;
