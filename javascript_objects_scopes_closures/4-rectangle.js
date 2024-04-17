class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || typeof w !== 'number' || typeof h !== 'number') {
        // If width or height is not positive or not a number, create an empty object
        return {};
      }
      this.width = w;
      this.height = h;
    }
  
    print() {
      for (let i = 0; i < this.height; i++) {
        let line = '';
        for (let j = 0; j < this.width; j++) {
          line += 'X';
        }
        console.log(line);
      }
    }
  
    rotate() {
      // Swap width and height
      [this.width, this.height] = [this.height, this.width];
    }
  
    double() {
      // Double width and height
      this.width *= 2;
      this.height *= 2;
    }
  }
  
  module.exports = Rectangle;
  