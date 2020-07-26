var snk;
var food;
var scl = 10; //same as snake size
var go;

function setup() {
    createCanvas(600, 600);
    snk = new snake();
    frameRate(15);
    snakeGrid();
}

function snakeGrid() {
    var cols = floor(width / scl); //floor takes the closed int val to the value in ()
    var rows = floor(height / scl);
    food = createVector(floor(random(cols)), floor(random(rows)));
    food.mult(scl);
}

function draw() {
    background(50);

    if (snk.eat(food)) {
        snakeGrid();
    }

    go = snk.gameOver();
    if (!go) {
        snk.update();
    }

    if (mouseIsPressed && go) {
        go = false;
        setup();
    }

    snk.show();

    //creating food
    fill(0, 255, 10);
    stroke(0);
    strokeWeight(1);
    rect(food.x, food.y, scl, scl);
}

function keyPressed() {

    if (keyCode === UP_ARROW) {
        snk.up();
    } else if (keyCode == DOWN_ARROW) {
        snk.down();
    } else if (keyCode == LEFT_ARROW) {
        snk.L();
    } else if (keyCode == RIGHT_ARROW) {
        snk.R();
    }
}
