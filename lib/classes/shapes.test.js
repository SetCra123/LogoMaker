const { default: test } = require("node:test");

const {Triangle, Square, Circle} = require("./lib/shapes")

describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="25" cy="75" r="20" height="100%" width="100%" fill=${this.color}/>`)
    });
});


describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill=${this.color}/>`)
    });
});

describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill=${this.color}/>`)
    });
});