import React, { FC } from 'react';
import './Sowing.scss';
import {CellRow} from "../CellRow";

interface SowingProps {}

const Sowing: FC<SowingProps> = () => (
  <div className="Sowing">
    <CellRow cellStyle={{textAlign: 'left'}} style={{fontWeight: 'bold'}}
             values={['Sowing']}/>
  </div>
);

export default Sowing;
