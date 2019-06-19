class Ship {
    constructor() {
      this.r = 70
      this.x = width;
      this.y = height - this.r;
    }
  

    move() {
      this.x -= 6;
    }
  
    show() {
      image(sImg, this.x, this.y, this.r, this.r);
      
    }
  }