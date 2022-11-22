import React, { FC } from 'react';
import './GrossInputsCost.scss';
import CellRow from "../CellRow/CellRow";
import Seed from "../Seed/Seed";
import Irrigation from "../Irrigation/Irrigation";
import LaborManagement from "../LaborManagement/LaborManagement";
import IntegratedPestManagement from "../IntegratedPestManagement/IntegratedPestManagement";
import IntegratedDiseaseManagement from "../IntegratedDiseaseManagement/IntegratedDiseaseManagement";
import IntegratedWeedManagement from "../IntegratedWeedManagement/IntegratedWeedManagement";
import NutrientManagement from "../NutrientManagement/NutrientManagement";

export interface GrossInputsCostProps {}

const GrossInputsCost: FC<GrossInputsCostProps> = () => (
  <div className="GrossInputsCost">
        <Seed />
        <Irrigation />
        <LaborManagement />
        <IntegratedPestManagement />
        <IntegratedDiseaseManagement />
        <IntegratedWeedManagement />
        <NutrientManagement />
        <CellRow style={{ fontWeight: 'bold' }} values={['Gross Input Cost',
            <CellRow values={['', '']}/>,
            <CellRow values={['', '']}/>
        ]}/>
        <CellRow style={{ fontWeight: 'bold' }} values={['Cost of Growing Total (A+B)',
            <CellRow values={['', '']}/>,
            <CellRow values={['', '']}/>
        ]}/>
  </div>
);

export default GrossInputsCost;
