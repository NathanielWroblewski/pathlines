import Vector from './models/vector.js'
import Particle from './models/particle.js'
import Perlin from './models/perlin.js'
import renderCircle from './views/circle.js'
import { PARTICLES, HEIGHT, WIDTH, SCALE } from './constants/index.js'
import { polarToCartesian } from './utilities/index.js'

const r = 1
const element = document.querySelector('.noise')
const perlin = new Perlin()
const particles = new Array(PARTICLES).fill(0).map(() => {
  const x = Math.floor(Math.random() * WIDTH)
  const y = Math.floor(Math.random() * HEIGHT)
  const position = Vector.from([x, y])
  const velocity = Vector.from([0, 0])

  return new Particle({ position, velocity })
})

let time = 0

const step = () => {
  particles.forEach(particle => {
    particle.move()

    const scaled = particle.position.divide(SCALE)
    const theta = perlin.noise({ x: scaled[0], y: scaled[1], z: time }) * 360
    const [x, y] = particle.position

    particle.velocity = Vector.from(polarToCartesian(r, theta))

    renderCircle({ element, x, y })
  })

  time += 0.01

  window.requestAnimationFrame(step)
}

step()
