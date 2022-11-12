import React, {FC} from 'react';
import './Seed.scss';
import {CellRow} from "../../Components/CellRow";
import CommonCostTableHeader from "../CommonCostTableHeader/CommonCostTableHeader";

interface SeedProps {
}

const Seed: FC<SeedProps> = () => (
    <div className="Seed">
        <CellRow values={['Seed',
            <CellRow values={['', '']}/>,
            <CellRow values={['', '']}/>]}
        />
    </div>
);

export default Seed;
