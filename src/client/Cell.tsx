import React, { useContext } from 'react'
import { GameStateContext } from './contexts/GameStateContext'
import { Piece } from './Piece'

interface CellProps {
  column: string
  row: string
}

export const Cell = ({ column, row }: CellProps) => {
  const { state, dispatch } = useContext(GameStateContext)

  const cellContainsPiece = (): boolean => state.pieceLocations[`${column}${row}`]

  return (
    <td
      id={`${column}${row}`}
      className="cell"
      onClick={() => {
        console.log('>>> globalMoveMode: ', state.globalMoveMode)
        dispatch({ type: 'TOGGLE_GLOBAL_MOVE_MODE' })
      }}
    >
      {cellContainsPiece() ? (
        <Piece
          type={state.pieceLocations[`${column}${row}`].type}
          color={state.pieceLocations[`${column}${row}`].color}
          location={column + row}
        />
      ) : (
        column + row
      )}
    </td>
  )
}
