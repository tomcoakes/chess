import React from 'react'

export const Piece = ({ color, type, location }) => {
  return (
    <div className={`piece ${color} ${false ? 'move-mode' : ''}`}>
      <p>{color}</p>
      <p>{type}</p>
    </div>
  )
}
