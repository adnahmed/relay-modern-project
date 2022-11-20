import React, { FC } from 'react';
import './IntegratedDiseaseManagement.scss';
import {CellRow} from "../CellRow";

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
