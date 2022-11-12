import React, { FC } from 'react';
import './IntegratedWeedManagement.scss';
import {CellRow} from "../../Components/CellRow";

interface IntegratedWeedManagementProps {}

const IntegratedWeedManagement: FC<IntegratedWeedManagementProps> = () => (
  <div className="IntegratedWeedManagement">
      <CellRow values={['Weedicide',
          <CellRow values={['', '']}/>,
          <CellRow values={['', '']}/>
      ]}/>
  </div>
);

export default IntegratedWeedManagement;
