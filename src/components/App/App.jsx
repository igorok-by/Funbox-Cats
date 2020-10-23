import React from 'react'
import './App.scss'

import Card from '../Card'
import cards from '../../utils/cards'

const App = () => {
  const cardsData = cards.map((card) => <Card data={card} key={card.id} />)

  return (
    <div className="app">
      <header>
        <h1 className="app__title">Ты сегодня покормил кота?</h1>
      </header>
      <main className="app__container">{cardsData}</main>
    </div>
  )
}

export default App
