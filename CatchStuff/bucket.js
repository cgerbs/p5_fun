function Bucket(){
  this.x = width/2 - 20;
  this.y = height - 20;
  this.velocityX = 0;
  this.xSpeed = 10

  this.show = function() {
      fill(255);
      rect(this.x, this.y, 60, 20);
  }

  this.update = function(){

      this.x += this.velocityX;
      if(this.x < 0){
        this.x = 0;
      }

      if(this.x > width - 60){
        this.x = width - 60;
      }
  }

  this.L = function(){
    this.velocity = 0;
    this.velocityX = -this.xSpeed;
  }

  this.R = function(){
    this.velocity = 0;
    this.velocityX = this.xSpeed;
  }

  this.stop = function(){
    this.velocityX = 0;
  }
}
