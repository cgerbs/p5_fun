//TODO: delete the columns which have passed the screen
var bird;
var pipes = [];
var score = 0;



function setup() {
  createCanvas(400, 600);
  bird = new bird();
  pipes.push(new Pipe());
}

function draw() {
  background(95, 240, 255);
  //text(score, 150, 150);

  for(var i = 0; i < pipes.length; i++) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)) {
      gameOver(i);
    }
  }

  bird.update();
  bird.show();

  if(frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }

}

function keyPressed() {
  if (key == ' ') {
    //console.log('SPACE');
    bird.up();
  }
}

function gameOver(i){
  bird.endGame();
  pipes[i].endGame();
  bird.x = pipes[i].x - 32;
  text("Gameover", 170, 140); //not working
}
