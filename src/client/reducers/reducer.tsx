import React, { useReducer } from 'react'
import { GameStateContext, startingLocations } from '../contexts/GameStateContext'
import { GameState } from '../typings'

interface StoreAction {
  type: string
  payload: { moveFrom: string }
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
  }
  return state
}
