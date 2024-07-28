const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('.lib/shapes.js');

class Svg{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return
    }
    setTextElement(text,color){
        this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle fill="white">`
    }       
    setShapeElement(shape){
        this.shapeElement = shape.render()
    }

}
