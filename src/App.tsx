import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import Game from './client/Game'
import { Store } from './client/reducers/reducer'

const App: FC = () => {
  return (
    <Store>
      <Game />
    </Store>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
