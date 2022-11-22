import React, {FC} from 'react';
import './CommonCostTableHeader.scss';
import CellRow from "../CellRow/CellRow";

export interface CommonCostTableHeaderProps {
}

const CommonCostTableHeader: FC<CommonCostTableHeaderProps> = (props) => (
    <>
        <CellRow style={{fontWeight: 'bold'}}
                 values={['Operation/Activity', 'Best Practices', 'Conventional Practices']}/>
        <CellRow values={['']}/>
        <CellRow style={{fontWeight: 'bold'}} values={['', <CellRow values={['Quantity', 'Total Cost PKR']}/>,
            <CellRow values={['Quantity', 'Total Cost PKR']}/>]}/>
    </>
);

export default CommonCostTableHeader;
