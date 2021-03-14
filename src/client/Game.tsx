import React, { useState } from 'react'
import Board from './Board'

export default () => {
  const [gameIsActive] = useState(false)

  return (
    <>
      <h3>Game status: {gameIsActive ? 'active' : 'inactive'}</h3>
      <Board></Board>
    </>
  )
}
