import React, { useReducer } from 'react'
import { GameStateContext, pieceStartingLocations } from '../contexts/GameStateContext'

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, {
    globalMoveMode: false,
    pieceLocations: pieceStartingLocations,
  })
  return (
    <GameStateContext.Provider value={{ state, dispatch }}>{children}</GameStateContext.Provider>
  )
}

const Reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_GLOBAL_MOVE_MODE':
      return {
        ...state,
        globalMoveMode: !state.globalMoveMode,
      }
  }
  return state
}
