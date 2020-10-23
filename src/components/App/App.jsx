import React, { useEffect, useState } from 'react'
import './App.scss'

import Card from '../Card'
import cards from '../../utils/cards'
import { DEFAULT, SELECTED, DISABLED } from '../../utils/constants'

const App = () => {
  const [cardsData, setCardsData] = useState([])

  useEffect(() => {
    setCardsData(cards.map((card) => ({ ...card, isClicked: false })))
  }, [])

  const updateCardState = (cardId) => {
    setCardsData((prevCardsData) =>
      prevCardsData.map((card) => {
        if (card.id === cardId && card.cardState !== DISABLED) {
          const newCardState = card.cardState === DEFAULT ? SELECTED : DEFAULT

          return { ...card, cardState: newCardState }
        }
        return card
      }),
    )
  }

  const handleCardClick = (cardId) => {
    setCardsData((prevCardsData) =>
      prevCardsData.map((card) => {
        if (card.id === cardId && card.cardState !== DISABLED) {
          const newIsClicked = !card.isClicked

          return { ...card, isClicked: newIsClicked }
        }
        return card
      }),
    )
  }

  const handleCardMouseOut = (cardId) => {
    setCardsData((prevCardsData) =>
      prevCardsData.map((card) => {
        if (card.id === cardId && card.isClicked) {
          const newCardState = card.cardState === DEFAULT ? SELECTED : DEFAULT

          return { ...card, cardState: newCardState, isClicked: false }
        }
        return card
      }),
    )
  }

  const mappedCards = cardsData.map((card) => {
    return card.cardState !== DISABLED ? (
      <Card
        data={card}
        key={card.id}
        handleCaptionClick={() => updateCardState(card.id)}
        handleCardClick={() => handleCardClick(card.id)}
        handleCardMouseOut={() => handleCardMouseOut(card.id)}
      />
    ) : (
      <Card
        data={card}
        key={card.id}
        handleCaptionClick={() => updateCardState(card.id)}
        handleCardClick={() => handleCardClick(card.id)}
      />
    )
  })

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
