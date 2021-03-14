import React from 'react'

interface PieceProps {
  color: string
  type: string
  location: string
  inMoveMode: boolean
}

export const Piece = ({ color, type, location, inMoveMode }: PieceProps) => {
  return (
    <div className={`piece ${color} ${inMoveMode ? 'move-mode' : ''}`}>
      <p>{color}</p>
      <p>{type}</p>
    </div>
  )
}
