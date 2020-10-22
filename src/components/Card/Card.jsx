import React, { memo } from 'react'
import classNames from 'classnames'
import './Card.scss'

import CardBorder from './CardBorder'
import catImg from './cat.png'
import ClipPath from './ClipPath'

const Card = ({ cardState }) => {
  const cardClass = classNames(
    'card',
    {
      'card--selected': cardState === 'selected',
    },
    {
      'card--disabled': cardState === 'disabled',
    },
  )

  return (
    <div className="card-wrapper">
      <div className={cardClass}>
        <p className="card__header">Сказочное заморское яство</p>
        <h2 className="card__title">Нямушка</h2>
        <h4 className="card__subtitle">с фуа-гра</h4>

        <p className="card__option">
          <span>10</span> порций
        </p>
        <p className="card__option">мышь в подарок</p>
        <p className="card__option"></p>

        <p className="card__label">
          <span>0,5</span>кг
        </p>

        <img src={catImg} className="card__img" alt="cat" />
        <CardBorder />
        <ClipPath />
      </div>

      <p className="card__caption">
        Чего сидишь? Порадуй котэ, <a href=" ">купи</a>
      </p>
    </div>
  )
}

export default memo(Card)
