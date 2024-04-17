class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        // If width or height is not positive or not a number, create an empty object
        return {};
      }
      this.width = w;
      this.height = h;
    }
  }
  
  module.exports = Rectangle;
  