import React, { Dispatch } from 'react'
import { Positions, Piece } from '../typings'

export const pieceStartingLocations: { [key in keyof Positions]?: Piece | null } = {
  a1: { type: 'rook', color: 'white' },
  b1: { type: 'knight', color: 'white' },
  c1: { type: 'bishop', color: 'white' },
  d1: { type: 'queen', color: 'white' },
  e1: { type: 'king', color: 'white' },
  f1: { type: 'bishop', color: 'white' },
  g1: { type: 'knight', color: 'white' },
  h1: { type: 'rook', color: 'white' },
  a2: { type: 'pawn', color: 'white' },
  b2: { type: 'pawn', color: 'white' },
  c2: { type: 'pawn', color: 'white' },
  d2: { type: 'pawn', color: 'white' },
  e2: { type: 'pawn', color: 'white' },
  f2: { type: 'pawn', color: 'white' },
  g2: { type: 'pawn', color: 'white' },
  h2: { type: 'pawn', color: 'white' },
  a3: null,
  b3: null,
  c3: null,
  d3: null,
  e3: null,
  f3: null,
  g3: null,
  h3: null,
  a4: null,
  b4: null,
  c4: null,
  d4: null,
  e4: null,
  f4: null,
  g4: null,
  h4: null,
  a5: null,
  b5: null,
  c5: null,
  d5: null,
  e5: null,
  f5: null,
  g5: null,
  h5: null,
  a6: null,
  b6: null,
  c6: null,
  d6: null,
  e6: null,
  f6: null,
  g6: null,
  h6: null,
  a8: { type: 'rook', color: 'black' },
  b8: { type: 'knight', color: 'black' },
  c8: { type: 'bishop', color: 'black' },
  d8: { type: 'queen', color: 'black' },
  e8: { type: 'king', color: 'black' },
  f8: { type: 'bishop', color: 'black' },
  g8: { type: 'knight', color: 'black' },
  h8: { type: 'rook', color: 'black' },
  a7: { type: 'pawn', color: 'black' },
  b7: { type: 'pawn', color: 'black' },
  c7: { type: 'pawn', color: 'black' },
  d7: { type: 'pawn', color: 'black' },
  e7: { type: 'pawn', color: 'black' },
  f7: { type: 'pawn', color: 'black' },
  g7: { type: 'pawn', color: 'black' },
  h7: { type: 'pawn', color: 'black' },
}

export const GameStateContext = React.createContext<{
  state: { globalMoveMode: boolean; pieceLocations: { [key in keyof Positions]?: Piece } }
  dispatch: Dispatch<any>
}>({
  state: { globalMoveMode: false, pieceLocations: pieceStartingLocations },
  dispatch: () => null,
})
