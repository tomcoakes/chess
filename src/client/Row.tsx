import React, { FC } from 'react'
import { Cell } from './Cell'

export default ({ number, className }: { number: string; className: string }) => {
  return (
    <tr className={className}>
      <Cell column='a' row={number} />
      <Cell column='b' row={number} />
      <Cell column='c' row={number} />
      <Cell column='d' row={number} />
      <Cell column='e' row={number} />
      <Cell column='f' row={number} />
      <Cell column='g' row={number} />
      <Cell column='h' row={number} />
    </tr>
  )
}
