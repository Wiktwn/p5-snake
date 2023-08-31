let snake;
let apple;

function setup() {
  createCanvas(700, 400);
  stroke("black")
  strokeWeight(1);
  fill("lime");
  snake = new Snake(createVector(20, 20), createVector(1,0), 10, 0);
  apple = createVector(int(random(0, width/snake.size))*10, int(random(0, height/snake.size))*10);
  frameRate(10);
}

function draw() {
  background(0);
  fill("lime");
  
  snake.update();
  if (snake.checkApple(apple)) {
    apple = createVector(int(random(0, width/snake.size))*10, int(random(0, height/snake.size))*10);
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
      snake.changeDirection(createVector(0,-1));
      break;
    case "s":
      snake.changeDirection(createVector(0, 1));
      break;
    case "a":
      snake.changeDirection(createVector(-1,0));
      break;
    case "d":
      snake.changeDirection(createVector(1, 0));
      break;
  }
}

function gameOver() {
  console.log("Game Over");
  noLoop();
}
