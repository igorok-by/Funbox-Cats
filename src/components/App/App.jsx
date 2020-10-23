import React, { useEffect, useState } from 'react'
import './App.scss'

import Card from '../Card'
import cards from '../../utils/cards'
import { DEFAULT, SELECTED, DISABLED } from '../../utils/constants'

const App = () => {
  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    setCardsData(cards)
  }, [])

  const handleClick = (id) => {
    setCardsData((prevCardsData) =>
      prevCardsData.map((card) => {
        if (card.id === id && card.cardState !== DISABLED) {
          const newCardState = card.cardState === DEFAULT ? SELECTED : DEFAULT

          return { ...card, cardState: newCardState }
        }
        return card
      }),
    )
  }

  const mappedCards = cardsData.map((card) => (
    <Card data={card} handleClick={() => handleClick(card.id)} key={card.id} />
  ))

  return (
    <div className="app">
      <header>
        <h1 className="app__title">Ты сегодня покормил кота?</h1>
      </header>
      <main className="app__container">{mappedCards}</main>
    </div>
  )
}

export default App
