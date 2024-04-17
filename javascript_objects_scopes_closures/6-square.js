#!/usr/bin/node
const Square = require('./5-square');

class SquareWithCharPrint extends Square {
  constructor(size) {
    super(size); // Call the constructor of the Square class with size
  }

  charPrint(c) {
    if (c === undefined) {
      c = 'X'; // Default character is X if c is not provided
    }

    for (let i = 0; i < this.size; i++) {
      console.log(c.repeat(this.size));
    }
  }
}

module.exports = SquareWithCharPrint;
