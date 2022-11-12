import React, { FC } from 'react';
import './IntegratedPestManagement.scss';
import CommonCostTableHeader from "../CommonCostTableHeader/CommonCostTableHeader";
import {CellRow} from "../../Components/CellRow";

interface IntegratedPestManagementProps {}

const IntegratedPestManagement: FC<IntegratedPestManagementProps> = () => (
  <div className="IntegratedPestManagement">
      <CellRow values={['Pesticide',
          <CellRow values={['', '']}/>,
          <CellRow values={['', '']}/>
      ]}/>
  </div>
);

export default IntegratedPestManagement;
