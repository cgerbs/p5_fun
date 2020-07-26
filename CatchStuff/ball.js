function Ball(){
  this.y = 0;
  this.x = Math.floor(Math.random() * 600) + 0;

  this.show = function(){
    fill(255);
    ellipse(this.x, this.y, 16, 16);
  }

  this.update = function(){
    this.y += 5;
  }

  this.gameOver = function(){
    if(this.x > height){
      console.log("go");
        return true;
    }
    return false;
  }

  this.catch = function(){

    if((this.x > bucket.x && this.x < bucket.x + 60) &&
    ((this.y >= bucket.y) && (this.y <= bucket.y + 20))){
      return true;
    }
    return false;
  }
}
