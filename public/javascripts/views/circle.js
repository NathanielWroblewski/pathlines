import { TAU } from '../constants/index.js'

const render = ({ element, x, y, radius = 1, fill = 'rgba(170, 170, 170, 0.04)' }) => {
  const context = element.getContext('2d')

  context.fillStyle = fill
  context.beginPath()
  context.arc(x, y, radius, 0, TAU)
  context.fill()
}

export default render
