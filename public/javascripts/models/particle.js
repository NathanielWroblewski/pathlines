class Particle {
  constructor ({ position, velocity, acceleration }) {
    this.position = position
    this.velocity = velocity
  }

  move () {
    this.position = this.position.add(this.velocity)
  }
}

export default Particle
