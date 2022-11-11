/*
A stub interface, use react-props here.
*/
import React from 'react'
import { Cell } from './Cell'

const cellRowStyle = (isVertical: boolean, cells: number) => {
  return isVertical ? { gridTemplateRows: `repeat(${cells}, 1fr)` } :
        { gridTemplateColumns: `repeat(${cells}, 1fr)`}
}
// TODO: Validate props with react-props
export function CellRow(props) {
  return (
    <div
      className="CellRow"
      style={{
          ...cellRowStyle(props.isVertical, props.values.length),
          ...props.style,
        display: 'grid',
      }}
    >
      {props.values.map((p) => {
        switch (typeof p) {
          case 'string':
            return <Cell style={props.cellStyle} value={p} />
          case 'object':
            return p
          default:
            return console.log('Unknown Object Received. CellRow only accepts values of type (string|CellRow)[].')
        }
      })}
    </div>
  )
}
