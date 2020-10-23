import React, { memo } from 'react'
import { DEFAULT, SELECTED, DISABLED } from '../../utils/constants'

const Caption = ({ cardState, handleClick, subtitle }) => {
  const DefCaption = () => (
    <>
      Чего сидишь? Порадуй котэ, <span onClick={handleClick}>купи</span>.
    </>
  )

  const selectedCaption = 'Головы щучьи с чесноком да свежайшая сёмгушка'

  const disabledCaption = `Печалька, ${subtitle} закончился.`

  switch (cardState) {
    case DEFAULT:
      return <DefCaption />

    case SELECTED:
      return selectedCaption

    case DISABLED:
      return disabledCaption

    default:
      return <DefCaption />
  }
}

export default memo(Caption)
