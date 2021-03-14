import React from 'react'
import { usePieceLocations } from './hooks/usePieceLocations'
import { Piece } from './Piece'

export const Cell = ({ column, row }: { column: string; row: string }) => {
  const pieceLocations = usePieceLocations()

  return (
    <td id={`${column}${row}`} className="cell">
      {pieceLocations[`${column}${row}`] ? (
        <Piece
          type={pieceLocations[`${column}${row}`].type}
          color={pieceLocations[`${column}${row}`].color}
        />
      ) : (
        column + row
      )}
    </td>
  )
}
