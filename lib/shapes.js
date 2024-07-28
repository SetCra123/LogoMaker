class Polygon {
    constructor() {
         this.color = shapeColor;
       }
     };
   
   class Triangle extends Polygon {
       render() {
           return `<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill=${this.shapeColor}/>`
           
           
       }
   };
   
   class Square extends Polygon {
       render() {
           return `<rect x="50" height="200" width="200" fill=${this.shapeColor}/>`
       }
   
   };
   
   class Circle extends Polygon {
       render() {
           return `<circle cx="25" cy="75" r="20" height="100%" width="100%" fill=${this.shapeColor}/>`
       }
   };
   
   
   module.exports = {Triangle, Square, Circle}