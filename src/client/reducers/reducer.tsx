import React, { useReducer } from 'react'
import { GameStateContext, startingLocations } from '../contexts/GameStateContext'
import { GameState } from '../typings'

interface StoreAction {
  type: string
  payload: { moveFrom: string; moveTo: string }
}

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer<(state: GameState, action: StoreAction) => GameState>(
    Reducer,
    {
      globalMoveMode: false,
      pieceLocations: startingLocations,
    },
  )
  return (
    <GameStateContext.Provider value={{ state, dispatch }}>{children}</GameStateContext.Provider>
  )
}

const Reducer = (state: GameState, action: StoreAction) => {
  switch (action.type) {
    case 'TOGGLE_GLOBAL_MOVE_MODE':
      console.log('>>> action: ', action)

      return {
        ...state,
        globalMoveMode: !state.globalMoveMode,
        pieceLocations: {
          ...state.pieceLocations,
          [action.payload.moveFrom]: {
            ...state.pieceLocations[action.payload.moveFrom],
            inMoveMode: !state.pieceLocations[action.payload.moveFrom].inMoveMode,
          },
        },
      }
    case 'ATTEMPT_MOVE':
      console.log('>>> action: ', action)

      const pieceToMove = Object.entries(state.pieceLocations).find((location) => {
        return location[1]?.inMoveMode === true
      })[1]

      const moveFrom = Object.entries(state.pieceLocations).find((location) => {
        return location[1]?.inMoveMode === true
      })[0]

      return {
        ...state,
        globalMoveMode: !state.globalMoveMode,
        pieceLocations: {
          ...state.pieceLocations,
          [moveFrom]: null,
          [action.payload.moveTo]: {
            ...pieceToMove,
            inMoveMode: false,
          },
        },
      }
  }
  return state
}
