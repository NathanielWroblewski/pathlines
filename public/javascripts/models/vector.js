class Vector extends Array {
  add (vector) {
    return this.map((element, index) => element + vector[index])
  }

  subtract (vector) {
    return this.add(vector.multiply(-1))
  }

  multiply (scalar) {
    return this.map(element => scalar * element)
  }

  divide (scalar) {
    return this.multiply(1 / scalar)
  }

  dot (vector) {
    return this.reduce((memo, element, index) => memo += element * vector[index], 0)
  }

  magnitude () {
    return Math.sqrt(this.dot(this))
  }

  normalize () {
    return this.divide(this.magnitude())
  }

  distance (vector) {
    return this.subtract(vector).magnitude()
  }
}

export default Vector
