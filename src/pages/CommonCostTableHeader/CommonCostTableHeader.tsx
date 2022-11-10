import React, {FC} from 'react';
import './CommonCostTableHeader.scss';
import {CellRow} from "../../Components/CellRow";

interface CommonCostTableHeaderProps {
}

const CommonCostTableHeader: FC<CommonCostTableHeaderProps> = () => (
    <>
        <CellRow style={{fontWeight: 'bold'}}
                 values={['Operation/Activity', 'Best Practices', 'Conventional Practices']}/>
        <CellRow values={['']}/>
        <CellRow style={{fontWeight: 'bold'}} values={['', <CellRow values={['Quantity', 'Total Cost PKR']}/>,
            <CellRow values={['Quantity', 'Total Cost PKR']}/>]}/>
    </>
);

export default CommonCostTableHeader;
