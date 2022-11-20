import React, {FC} from 'react';
import './LaborManagement.scss';
import {CellRow} from "../CellRow";

interface LaborManagementProps {
}

const LaborManagement: FC<LaborManagementProps> = () => (
    <div className="LaborManagement">
        <CellRow values={['Labor',
            <CellRow values={['', '']}/>,
            <CellRow values={['', '']}/>
        ]}/>
    </div>
);

export default LaborManagement;
