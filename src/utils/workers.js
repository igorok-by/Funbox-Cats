const createPortionsAppendix = (quantity) => {
  if (quantity <= 14 && quantity >= 10) return ' порций'

  const lastDigit = +quantity.toString().slice(-1)

  switch (lastDigit) {
    case 1:
      return ' порция'
    case 2:
    case 3:
    case 4:
      return ' порции'
    default:
      return ' порций'
  }
}

const createMousesAppendix = (quantity) => {
  if (quantity <= 14 && quantity >= 10) return ' мышей в подарок'

  const lastDigit = +quantity.toString().slice(-1)

  switch (lastDigit) {
    case 1:
      return 'мышь в подарок'
    case 2:
    case 3:
    case 4:
      return ' мыши в подарок'
    default:
      return ' мышей в подарок'
  }
}

export { createPortionsAppendix, createMousesAppendix }
