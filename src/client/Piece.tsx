import React from 'react'

export const Piece = ({ color, type }) => {
  return (
    <div className={'piece' + ' ' +  color}>
      <p>{color}</p>
      <p>{type}</p>
    </div>
  )
}
