import React, { useReducer } from 'react'
import { GameStateContext, startingLocations } from '../contexts/GameStateContext'
import { GameState } from '../typings'

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer<(state: GameState, action: string) => GameState>(Reducer, {
    globalMoveMode: false,
    pieceLocations: startingLocations,
  })
  return (
    <GameStateContext.Provider value={{ state, dispatch }}>{children}</GameStateContext.Provider>
  )
}

const Reducer = (state: GameState, action) => {
  switch (action.type) {
    case 'TOGGLE_GLOBAL_MOVE_MODE':
      console.log('>>> action: ', action)

      state.pieceLocations

      return {
        ...state,
        globalMoveMode: !state.globalMoveMode,
      }
  }
  return state
}
