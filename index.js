const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Square, Circle} = require("./lib/shapes");

const triangle = new Triangle('red');
const square = new Square('green');
const circle = new Circle('blue');


// class Svg{
//     constructor(){
//         this.textElement = ''
//         this.shapeElement = ''
//     }
//     render(){
//         return
//     }
//     setTextElement(text,color){
//         this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle fill="white">`
//     }       
//     setShapeElement(shape){
//         this.shapeElement = shape.render()
//     }

// }

const createSHape = ()=> inquirer
    .prompt ([
    {
        type: "input",
        name: "text",
        message: "TEXT: ENter up to (3) Characters:",  
        validate: input => input.length <=3 || 'Please enter up tp three characters'
    },
    {
        type: "input",
        name: "textColor",
        message: "TEXT COLOR: Enter a color for your text",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "SHAPE COLOR: Enter a color for your shape",
    },
    {
        type: "list",
        name: "shapeType",
        message: "Choose which Shape you would like?",
        choices: ["Triangle", "Square", "Circle"],
    },

    


])

.then((answers) => {
    const svgLogoGenerator = inquirer.prompt(answers);

    let shape;
    switch (answers.shapeType) {
        case 'Triangle':
            shape = new Triangle(answers.shapeColor);
            break;
        case 'Square':
            shape = new Square(answers.shapeColor);
            break;
        case 'Circle':
            shape = new Circle(answers.shapeColor);
            break;
    }

    

    const svgLogo = `<svg height="300" width="300" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    <text x="100" y="100" font-size="40" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`;

    fs.writeFile('logo.svg', svgLogo, (err) => { 
      err ? console.log(err) : console.log('Successfully created logo.svg!')
    });
  });


  
//   const init = () => {
    createSHape()
//       // Use writeFile method imported from fs.promises to use promises instead of
//       // a callback function
//       .then((answers) => fs.writeFile('logo.svg', svgLogo(answers)))
//       .then(() => console.log('Successfully created logo.svg'))
//       .catch((err) => console.error(err));
//   };
  
//   init();