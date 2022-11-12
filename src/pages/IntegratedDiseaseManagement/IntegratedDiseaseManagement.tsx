import React, { FC } from 'react';
import './IntegratedDiseaseManagement.scss';
import CommonCostTableHeader from "../CommonCostTableHeader/CommonCostTableHeader";
import {CellRow} from "../../Components/CellRow";

interface IntegratedDiseaseManagementProps {}

const IntegratedDiseaseManagement: FC<IntegratedDiseaseManagementProps> = () => (
  <div className="IntegratedDiseaseManagement">
      <CellRow values={['Disease',
          <CellRow values={['', '']}/>,
          <CellRow values={['', '']}/>
      ]}/>
  </div>
);

export default IntegratedDiseaseManagement;
