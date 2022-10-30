/*
A stub interface, use react-props here.
*/
import React, { HTMLAttributes } from 'react'
import { Cell } from './Cell'
interface CellRow {
  values: (string | CellRow)[]
  cellStyle?: HTMLAttributes<HTMLDivElement>
}
const cellRowStyle = (isVertical: boolean, cells: number) => {
  return isVertical ? { gridTemplateRows: `repeat(${cells}. 1fr)` } :
        { gridTemplateColumns: `repeat(${cells}, 1fr)`}
}
export function CellRow<CellRowProps>(props) {
  return (
    <div
      className="CellRow"
      style={{
        display: 'grid',
        ...cellRowStyle(props.isVertical, props.values.length),
        ...props.style,
      }}
    >
      {props.values.map((p) => {
        switch (typeof p) {
          case 'string':
            return <Cell style={props.cellStyle} value={p} />
          case 'object':
            return p
          default:
            console.log('Unknown Object Recieved. CellRow only accepts values of type (string|CellRow)[].')
        }
      })}
    </div>
  )
}
