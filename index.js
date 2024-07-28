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

const userInput = [
    {
        type: "input",
        name: "text",
        message: "TEXT: ENter up to (3) Characters:",  
    },
    {
        type: "input",
        name: "text-color",
        message: "TEXT COLOR: Enter a color for your text",
    },
    {
        type: "input",
        name: "shape",
        message: "SHAPE COLOR: Enter a color for your shape",
    },
    {
        type: "list",
        name: "shape-image",
        message: "Choose which Shape you would like?",
        choices: ("Triangle", "Square", "Circle"),
    },

];
