const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require("./lib/shapes");

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

const userInput = ()=> inquirer
    .prompt ([
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
        choices: ["Triangle", "Square", "Circle"],
    },

    


])

.then((answers) => {
    const svgLogoGenerator = Polygon(answers);

    fs.writeFile('logo.svg', svgLogoGenerator, (err) =>
      err ? console.log(err) : console.log('Successfully created logo.svg!')
    );
  });



  const init = () => {
    userInput()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => fs.writeFile('logo.svg', svgLogoGenerator(answers)))
      .then(() => console.log('Successfully created logo.svg'))
      .catch((err) => console.error(err));
  };
  
  init();