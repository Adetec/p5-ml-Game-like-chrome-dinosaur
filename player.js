class Player {
  constructor() {
    this.r = 70;
    this.x = 50;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -35;
    }
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  hits(ship) {
    return collideRectRect(this.x, this.y, this.r, this.r, ship.x-5, ship.y, ship.r, ship.r);
  }

  show() {
    image(pImg, this.x, this.y, this.r, this.r);
    
  }
}