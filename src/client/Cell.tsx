import React, { useContext } from 'react'
import { GameStateContext } from './contexts/GameStateContext'
import { Piece } from './Piece'

interface CellProps {
  column: string
  row: string
}

export const Cell = ({ column, row }: CellProps) => {
  const { state, dispatch } = useContext(GameStateContext)

  const cellState = state.pieceLocations[`${column}${row}`]

  return (
    <td
      id={`${column}${row}`}
      className="cell"
      onClick={() => {
        if (cellState !== null) {
          dispatch({ type: 'TOGGLE_GLOBAL_MOVE_MODE', payload: { moveFrom: column + row } })
        }

        if (cellState === null && state.globalMoveMode === true) {
          dispatch({ type: 'ATTEMPT_MOVE', payload: { moveTo: column + row } })
        }
      }}
    >
      {cellState !== null ? (
        <Piece
          type={cellState.type}
          color={cellState.color}
          location={column + row}
          inMoveMode={cellState.inMoveMode}
        />
      ) : (
        column + row
      )}
    </td>
  )
}
