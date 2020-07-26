var pipes = [];
var ball;
var scaler = 45;
var scalerLevelChange = 10;
var levelLength = 1000;
var counter = 1;
var pipeSpeedUp = 0;
var gmOv;

function setup() {
    createCanvas(400, 600);
    ball = new Ball();
    pipes.push(new Pipe());
}

function draw() {
    background(0);
    for (var i = 0; i < pipes.length; i++) {
        if (!gmOv) {
            pipes[i].hits(ball);
            pipes[i].speedUp();
            pipes[i].update();
        }
        pipes[i].show();
        gmOv = ball.gameOver();
    }
    if (!gmOv) {
        ball.update();
    }
    ball.show();

    if (frameCount % scaler == 0) {
        pipes.push(new Pipe());
    }

    if (frameCount % levelLength == 0 && !gmOv) {
        console.log(pipes.speed);
        if (pipes.speed < 7) {
            pipeSpeedUp += .7;
        } else {
            pipes.speed == 5;
        }

        counter++;
        if (scaler > 25) {
            scaler = scaler - scalerLevelChange;
        } else {
            scaler = 25
        }
    }

    if (keyIsDown(LEFT_ARROW)) {
        ball.L();
    } else if (keyIsDown(RIGHT_ARROW)) {
        ball.R();
    }
}

function keyReleased() {
    ball.stop();
}