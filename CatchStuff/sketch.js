var bucket;
var balls = [];
var newBallCount = 50;
var score = 0;

function setup(){
  createCanvas(600, 600);
  bucket = new Bucket();
  balls.push(new Ball);
}

function draw() {
  background(0);
  bucket.update();
  bucket.show();

  text(score, width/2, height/2);

  for(var i = balls.length - 1; i >= 0; i--){
    if(balls[i].catch()){
      balls.splice(i, 1);
      score++
    }

    if(!balls[i].gameOver()){
      balls[i].update();
      balls[i].show();
    }
  }

  if(frameCount % newBallCount == 0){
    balls.push(new Ball);
  }


  if (keyIsDown(LEFT_ARROW)) {
      bucket.L();
  } else if (keyIsDown(RIGHT_ARROW)) {
      bucket.R();
  }else{
     bucket.stop();
  }
}

// function keyIsReleased(){
//   bucket.stop();
// }
