import React, { memo } from 'react'
import classNames from 'classnames'
import './Card.scss'

import Caption from '../Caption'
import CardBorder from './CardBorder'
import ClipPath from './ClipPath'
import catImg from './cat.png'
import { SELECTED, DISABLED } from '../../utils/constants'
import {
  createPortionsAppendix,
  createMousesAppendix,
} from '../../utils/workers'

const Card = ({
  data: {
    title,
    subtitle,
    quantityPortions,
    quantityMouses,
    extraOption,
    weight,
    captionSelected,
    cardState,
  },
  handleCardClick,
  handleCardMouseOut,
  handleCaptionClick,
}) => {
  const cardClass = classNames(
    'card',
    {
      'card--selected': cardState === SELECTED,
    },
    {
      'card--disabled': cardState === DISABLED,
    },
  )

  return (
    <div className="card-wrapper">
      <div
        className={cardClass}
        onClick={handleCardClick}
        onMouseOut={handleCardMouseOut}
      >
        <p className="card__header-default">Сказочное заморское яство</p>
        <p className="card__header-hover-selected">Котэ не одобряет?</p>
        <h2 className="card__title">{title}</h2>
        <h4 className="card__subtitle">{subtitle}</h4>

        <p className="card__option">
          <span>{quantityPortions}</span>
          {createPortionsAppendix(quantityPortions)}
        </p>
        <p className="card__option">
          <span>{quantityMouses === 1 ? '' : quantityMouses}</span>
          {createMousesAppendix(quantityMouses)}
        </p>
        {extraOption && <p className="card__option">{extraOption}</p>}

        <p className="card__label">
          <span>{weight.toLocaleString('ru-RU')}</span>кг
        </p>

        <img src={catImg} className="card__img" alt="cat" />
        <CardBorder />
        <ClipPath />
      </div>

      <Caption
        cardState={cardState}
        captionSelected={captionSelected}
        handleCaptionClick={handleCaptionClick}
        subtitle={subtitle}
      />
    </div>
  )
}

export default memo(Card)
