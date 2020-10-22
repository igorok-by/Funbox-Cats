import React, { memo } from 'react'

const CardBorder = () => {
  return (
    <svg
      className="card__border"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 480"
    >
      <defs>
        <clipPath id="a">
          <path d="M308 0c6.627 0 12 5.372 12 12v456c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V43L43 0z" />
        </clipPath>
      </defs>
      <path
        fill="none"
        strokeMiterlimit="20"
        strokeWidth="8"
        d="M308 0c6.627 0 12 5.372 12 12v456c0 6.627-5.373 12-12 12H12c-6.627 0-12-5.373-12-12V43L43 0z"
        clipPath='url("#a")'
      />
    </svg>
  )
}

export default memo(CardBorder)
