import React, { memo } from 'react'
import classNames from 'classnames'

import { SELECTED, DISABLED } from '../../utils/constants'

const Caption = ({
  cardState,
  captionSelected,
  handleCaptionClick,
  subtitle,
}) => {
  const classCaption = classNames('card-caption', {
    'card-caption--warning': cardState === DISABLED,
  })

  const DefCaption = () => (
    <>
      Чего сидишь? Порадуй котэ, <span onClick={handleCaptionClick}>купи</span>.
    </>
  )

  const disabledCaption = `Печалька, ${subtitle} закончился.`

  switch (cardState) {
    case SELECTED:
      return <p className={classCaption}>{captionSelected}</p>

    case DISABLED:
      return <p className={classCaption}>{disabledCaption}</p>

    default:
      return (
        <p className={classCaption}>
          <DefCaption />
        </p>
      )
  }
}

export default memo(Caption)
