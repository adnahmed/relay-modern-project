import React, {FC} from 'react';
import './Seed.scss';
import {CellRow} from "../../Components/CellRow";
import CommonCostTableHeader from "../CommonCostTableHeader/CommonCostTableHeader";

interface SeedProps {
}

const Seed: FC<SeedProps> = () => (
    <div className="Seed">
        <CommonCostTableHeader/>
        <CellRow values={['Seed', <CellRow values={['', '']} />, <CellRow values={['', '']} />]} />
   </div>
);

function FourBlankCells() {
        return <CellRow values={[<TwoBlankCells /> , <TwoBlankCells />]} />
}
function TwoBlankCells() {
    return <CellRow values={['', '']} />
}
export default Seed;
