import React from 'react'
import './App.scss'
import Card from '../Card'

const App = () => {
  return (
    <div className="app">
      <header>
        <h1 className="app__title">Ты сегодня покормил кота?</h1>
      </header>
      <main className="app__container">
        <Card />
        <Card cardState="selected" />
        <Card cardState="disabled" />
      </main>
    </div>
  )
}

export default App
