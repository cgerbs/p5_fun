function Pipe() {
    this.heightOfPipe = 20;
    this.centerOfGap = Math.floor(Math.random() * 300) + 50;
    this.gap = 50;
    this.y = height;
    this.speed = 4 + pipeSpeedUp;

    this.speedUp = function() {
        if (frameCount % levelLength == 0) {
            if (this.speed < 9) {
                this.speed + pipeSpeedUp;
            } else {
                this.speed == 9;
            }
        }
    }

    this.hits = function(ball) {
        if (ball.y > (this.y - 16) && ball.y < (this.y - 16) + this.heightOfPipe &&
            (ball.x < (this.centerOfGap - (this.gap / 2)) || ball.x > width + (-(width - this.centerOfGap - (this.gap / 2))))) {

            ball.y = this.y - 28;
            return true;
        }
    }

    this.show = function() {

        if (counter == 1) {
            fill('rgb(0,255,0)');
        } else if (counter == 2) {
            fill('rgb(255,0,0)');
        } else if (counter == 3) {
            fill('rgb(0,0,255)');
        } else if (counter == 4) {
            fill('rgb(200,0,255)');
        } else if (counter == 5) {
            fill('rgb(0,150,200)');
        } else if (counter == 6) {
            fill('rgb(255,0,200)');
        } else if (counter == 7) {
            fill('rgb(200,0,255)');
        }

        rect(-10, this.y, (this.centerOfGap - (this.gap / 2)), this.heightOfPipe, 8); //leftside pipe
        rect(this.centerOfGap + (this.gap / 2), this.y, (width - this.centerOfGap - 20), this.heightOfPipe, 8); //rightside pipe

    }

    this.update = function() {
        this.y -= this.speed;
    }
}