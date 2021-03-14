import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Game from './client/Game'
import { Store } from './client/reducers/reducer'

const Index = () => {
  return (
    <Store>
      <Game />
    </Store>
  )
}

ReactDOM.render(<Index />, document.getElementById('app'))
