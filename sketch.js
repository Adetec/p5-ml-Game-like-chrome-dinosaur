let player, pImg, sImg, bImg;
let ships = []

function preload() {
  pImg = loadImage('player.png')  
  bImg = loadImage('background.png')  
  sImg = loadImage('ship.png')  
}


function setup() {
  player = new Player();
  ship = new Ship();
  createCanvas(800,450);
}

function keyPressed() {
  if (key == ' ') {
    player.jump()
  }
}

function draw() {
  background(bImg);
  
  if (random(1) < 0.005) {
    ships.push(new Ship())
  }
  
  for (const ship of ships) {
    ship.move();
    ship.show();
    
    if (player.hits(ship)) {
      console.log('Game over');
      noLoop();
    }
  }

  player.show();
  player.move();
}