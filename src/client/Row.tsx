import React, { FC } from 'react'

export default ({ number, className }: { number: string; className: string }) => {
  return (
    <tr className={className}>
      {Cell('a', number)}
      {Cell('b', number)}
      {Cell('c', number)}
      {Cell('d', number)}
      {Cell('e', number)}
      {Cell('f', number)}
      {Cell('g', number)}
      {Cell('h', number)}
    </tr>
  )
}

const Cell = (column: string, row: string) => {
  return (
    <td id={`${column}${row}`} className="cell">
      {column}
      {row}
    </td>
  )
}
