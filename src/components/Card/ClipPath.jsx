import React, { memo } from 'react'

const ClipPath = () => (
  <svg width="0" height="0" opacity="0">
    <clipPath id="clip-path" clipPathUnits="objectBoundingBox">
      <path d="M0.963,0 c0.021,0,0.038,0.011,0.038,0.025 v0.95 c0,0.014,-0.017,0.025,-0.037,0.025 H0.038 c-0.021,0,-0.037,-0.011,-0.037,-0.025 V0.09 L0.134,0"></path>
    </clipPath>
  </svg>
)

export default memo(ClipPath)
