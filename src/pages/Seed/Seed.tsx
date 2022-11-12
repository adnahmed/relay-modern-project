import React, {FC} from 'react';
import './Seed.scss';
import {CellRow} from "../../Components/CellRow";

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
