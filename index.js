const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');

class Polygon {
    constructor(shapeName, shapeColor) {
      this.name = shapeName;
      this.color = shapeColor;
    }
  }
class Triangle extends Polygon {
    constructor() {
        super(shapeName, shapeColor);
        
    }
}

class Square extends Polygon {
    constructor() {
        super(shapeName, shapeColor);
    }

}

class Circle extends Polygon {
    constructor() {
        super(shapeName, shapeColor);g
    }
}
// const triangle = new Polygon()<polygon points="150, 18 244, 182 56, 182" fill="blue" />'

// const square = new Polygon();
// const circle = new Polygon(); <circle cx="25" cy="75" r="20"/>