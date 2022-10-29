/*
A stub interface, use react-props here.
*/
import React from "react";
import { Cell } from './Cell'
interface CellRow {
    values: string[]
}

export function CellRow<CellRowProps>(props) {
    return (
        <div
            className="CellRow"
            style={{
                display: 'flex',
            }}
        >
            {props.values.map((p) => (
                <Cell flex="1 1 0" value={p}/>
            ))}
        </div>
    )
}