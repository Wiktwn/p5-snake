let snake;
let apple;
var keyQueue = [];

function setup() {
  createCanvas(700,400);
  stroke("black")
  strokeWeight(1);
  fill("lime");
  snake = new Snake(createVector(20, 20), createVector(1,0), 20, 0);
  apple = createVector(int(random(0, width/snake.size))*snake.size, int(random(0, height/snake.size))*snake.size);
  frameRate(12);
}

function draw() {
  background(0);
  fill("lime");
  
  if (keyQueue.length > 0) {
    snake.changeDirection(keyQueue.pop());
  }
  snake.update();
  if (snake.checkApple(apple)) {
    apple = createVector(int(random(0, width/snake.size))*snake.size, int(random(0, height/snake.size))*snake.size);
  }
  if (snake.dead) {
    gameOver();
  }
  snake.show();
  fill("red");
  square(apple.x, apple.y, snake.size);
}

function keyPressed() {
  switch (key) {
    case "w":
      keyQueue.push(createVector(0,-1));
      break;
    case "s":
      keyQueue.push(createVector(0, 1));
      break;
    case "a":
      keyQueue.push(createVector(-1,0));
      break;
    case "d":
      keyQueue.push(createVector(1, 0));
      break;
  }
}

function gameOver() {
  console.log("Game Over");
  noLoop();
}