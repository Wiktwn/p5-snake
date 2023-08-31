class Snake {
  
  constructor(pos, dir, size, length=0) {
    this.pos = pos;
    this.dir = dir.mult(size);
    this.size = size;
    this.length = length;
    this.segments = [];
    this.prevDir;
    this.dead = false;
  }
  
  update() {
    this.pos.add(this.dir);
    this.prevDir = this.dir;
    if (this.pos.x >  width || this.pos.x < 0) {snake.dead = true;}
    if (this.pos.y > height || this.pos.y < 0) {snake.dead = true;}
    this.segments.unshift(new Segment(p5.Vector.sub(this.pos, this.dir), this.size));
    
    if (this.segments.length > this.length) {
      this.segments.pop();
    }
    for (let i=0; i<this.segments.length; i++) {
      var segment = this.segments[i];
      this.segments[i].show();
      if (segment.pos.equals(this.pos)) {
        this.dead = true;
      }
    }
  }
  
  changeDirection(newDir) {
    newDir.mult(this.size);
    //if the direction your moving is opposite to the new direction, do not change direction
    if (p5.Vector.add(this.prevDir, newDir).equals(createVector(0,0))) {
      return;
    }
    this.dir = newDir;
  }
  
  checkApple(applePos) {
    if (this.pos.equals(applePos)) {
      this.length++;
      return true;
    } else {
      return false;
    }
  }
  
  show() {
    square(this.pos.x, this.pos.y, this.size);
  }
}

class Segment {
  constructor(pos, size) {
    this.pos = createVector(pos.x, pos.y);
    this.size = size;
  }
  
  show() {
    square(this.pos.x, this.pos.y, this.size);
  }
}