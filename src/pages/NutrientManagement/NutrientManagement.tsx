import React, {FC} from 'react';
import './NutrientManagement.scss';
import {CellRow} from "../CellRow";

interface NutrientManagementProps {
}

const NutrientManagement: FC<NutrientManagementProps> = () => (
    <div className="NutrientManagement">
        <CellRow values={['Fertilizers (NPK)',
            <CellRow values={['', '']}/>,
            <CellRow values={['', '']}/>
        ]}/>
        <CellRow values={['Micro Nutrients',
            <CellRow values={['', '']}/>,
            <CellRow values={['', '']}/>
        ]}/>
    </div>
);

export default NutrientManagement;
