class Circle {
  #pi;

  constructor(radius) {
    this.#pi = Math.PI;
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get circumference() {
    return this.#pi * this.diameter;
  }

  get area() {
    return this.#pi * this.radius * this.radius;
  }

  set diameter(newDiameter) {
    this.radius = newDiameter / 2;
  }

  set circumference(newCircumference) {
    this.radius = newCircumference / this.#pi / 2;
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea / this.#pi);
  }

}