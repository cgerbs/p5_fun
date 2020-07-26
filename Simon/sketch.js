var numberOfBeeps = 10;
var sequence = [];
var sequenceFrames = [];
var timeD;
var buttons = [];
var greenButton;
var redButton;
var yellowButton;
var blueButton;
var isLit = false;
var litCounter = 100;
var sequenceLength = 10;
var indicator;



function setup(){
  fillSequence();
  createCanvas(400,400);
  greenButton = new button(0, 0, 0, 255/1.5, 0);
  redButton = new button(width/2, 0, 255/1.5, 0 , 0);
  yellowButton = new button(0, height/2, 255/1.5, 255/1.5, 0);
  blueButton = new button(width/2, height/2, 0, 0, 255/1.5);
  fillButtonsArray(); //fills the button array

}


function draw(){
  background(50);

  for(var i = 0; i < sequence.length; i++){
    if(frameCount == sequenceFrames[i]){
      buttons[sequence[i]].lightUp();
    }
  }

  for(var j = 0; j < buttons.length; j++){ //shows buttons
    buttons[j].show();
  }
}


function mousePressed(){
  if(mouseX < width/2){
    if(mouseY > height/2){
      yellowButton.lightUp();
    }else{
      greenButton.lightUp();
    }
  }else{
    if(mouseY > height/2){
      blueButton.lightUp();
    }else{
      redButton.lightUp();
    }
  }
}


function fillSequence() {
  for(var i = 0; i < sequenceLength; i++){
    sequence[i] = Math.floor(random(0,4));
    sequenceFrames[i] = 50*i + 50;
    console.log(sequence);
  }
}


function fillButtonsArray(){
  buttons.push(greenButton);
  buttons.push(redButton);
  buttons.push(yellowButton);
  buttons.push(blueButton);
}
