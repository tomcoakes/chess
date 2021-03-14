import React from 'react'

interface PieceProps {
  color: string
  type: string
  location: string
}

export const Piece = ({ color, type, location }: PieceProps) => {
  return (
    <div className={`piece ${color} ${false ? 'move-mode' : ''}`}>
      <p>{color}</p>
      <p>{type}</p>
    </div>
  )
}
