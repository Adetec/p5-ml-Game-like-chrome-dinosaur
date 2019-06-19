let player, pImg, sImg, bImg, soundClassifier;
let ships = []

function preload() {
  const options = { probabilityThreshold: 0.95 };
  soundClassifier = ml5.soundClassifier('speechCommands18w', options)
  pImg = loadImage('player.png')  
  bImg = loadImage('background.png')  
  sImg = loadImage('ship.png')  
}


function setup() {
  createCanvas(800,450);
  player = new Player();
  ship = new Ship();
  soundClassifier.classify(gotCommand);
}

function gotCommand(error, results) {
  if (error) {
    console.error(error);
  }
  if (results[0].label == 'up') {
    player.jump();
    console.log(results[0].label);
  }
}

function keyPressed() {
  if (key == ' ') {
    player.jump();
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