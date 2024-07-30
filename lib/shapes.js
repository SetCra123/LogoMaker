class Polygon {
    constructor(color) {
         this.color = color;
       }
     };
   
   class Triangle extends Polygon {
    constructor(color){
        super(color);
    }    
        
        render(shape) {
        return `<polygon height="100%" width="100%" points="150, 18 244, 182 56, 182" fill=${this.color}/>`;
           
           
       }
   };
   
   class Square extends Polygon {
    constructor(color) {
        super(color);
    }    
        
        render(shape) {
        return `<rect x="50" y="50" height="200" width="200" fill=${this.color}/>`;
       }
   
   };
   
   class Circle extends Polygon {
    constructor(color) {
        super(color);
    } 
        
        render(shape) {
        return `<circle cx="150" cy="150" r="100" height="100%" width="100%" fill=${this.color}/>`;
       }
   };
   
   
   module.exports = {Triangle, Square, Circle}