function bird() {
  this.x = 100;
  this.y = height / 2;

  this.gravity = .9;
  this.velocity = 0;
  this.jump = -20;

  this.endGame = function() {
    this.speed = 0;
    this.velocity = 0;
    this.jump = 0;
  }

  this.show = function() {
    fill(236, 236, 0);
    stroke(0);
    strokeWeight(1);
    ellipse(this.x, this.y, 32, 32);
    }

  this.up = function() {
    this.velocity += this.jump;
    }

  this.update = function() {
    this.velocity += this.gravity;
    this.velocity *= 0.9;
    this.y += this.velocity;

    if(bird.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if(bird.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}
