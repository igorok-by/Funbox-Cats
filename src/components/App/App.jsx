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
        if (card.id === cardId) {
          const newCardState = card.cardState === DEFAULT ? SELECTED : DEFAULT

          return { ...card, cardState: newCardState, isClicked: false }
        }
        return card
      }),
    )
  }

  const handleCardClick = (cardId) => {
    setCardsData((prevCardsData) =>
      prevCardsData.map((card) =>
        card.id === cardId && card.cardState !== DISABLED
          ? { ...card, isClicked: !card.isClicked }
          : card,
      ),
    )
  }

  const handleCardMouseOut = (cardId) => {
    const updatedCard = cardsData.find((card) => card.id === cardId)

    if (updatedCard.isClicked) updateCardState(cardId)
  }

  const mappedCards = cardsData.map((card) =>
    card.cardState === DISABLED ? (
      <Card data={card} key={card.id} />
    ) : (
      <Card
        data={card}
        key={card.id}
        handleCaptionClick={() => updateCardState(card.id)}
        handleCardClick={() => handleCardClick(card.id)}
        handleCardMouseOut={() => handleCardMouseOut(card.id)}
      />
    ),
  )

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
