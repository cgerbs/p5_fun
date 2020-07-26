function Pipe() {
  this.centerOfGap = Math.floor(Math.random() * 300) + 50;
  this.gap = 100;
  this.x = width;
  this.widthOfPipe = 50;
  this.speed = 5;
  this.hOfTopPipe = height - this.centerOfGap - (this.gap/2);
  this.hOfBottomPipe = -this.centerOfGap + (this.gap/2);


  this.endGame = function() {
    //trying to make all the pipes stop at once so
    //that they dont keep loading
    for(var i = 0; i < pipes.length; i++) {
      pipes[i].speed = 0;
    }
  }

  this.hits = function(bird) {
    
}

  this.show = function() {
    fill('rgb(0,255,0)');
    stroke(0);
    strokeWeight(1);
    rect(this.x, 0, this.widthOfPipe, this.hOfTopPipe);//top
    rect(this.x, height, this.widthOfPipe, this.hOfBottomPipe);//bottom
  }

  this.update = function() {
    this.x -= this.speed;
  }
}
