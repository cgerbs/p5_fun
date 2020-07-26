function Ball() {
    this.x = width / 2;
    this.y = height / 2;

    this.xSpeed = 8;

    this.gravity = 2;
    //this.m = 1.5;
    this.velocityX = 0; //velocity will change when arrow keys are pushed
    this.velocityY = 10; //this will change with gravity

    this.gameOver = function() {
        if (this.y < 0 + 16) {
            textSize(32);
            fill(255, 255, 255);
            text("Gameover!", width / 2 - 75, height / 2 - 30);
            text("Reload to play again!", width / 2 - 150, height / 2 + 50);

            return true;
        }
        return false;
    }

    this.show = function() {
        fill(255);
        ellipse(this.x, this.y, 32, 32);
    }

    this.update = function() {

        this.x += this.velocityX;

        if (this.velocity < 200) {
            this.velocityY += this.gravity;
        }

        this.y += this.velocityY;

        if (this.x > width - 16) {
            this.x = width - 16;
        }
        if (this.x < 0 + 16) {
            this.x = 0 + 16;
        }
        if (this.y > height - 16) {
            this.y = height - 16;
        }

    }

    this.L = function() {
        this.velocityX = 0;
        //this.xSpeed = 5;
        this.velocityX = -this.xSpeed;
    }

    this.R = function() {
        this.velocityX = 0;
        //this.xSpeed = 5;
        this.velocityX = this.xSpeed;
    }

    this.stop = function() {
        this.velocityX = 0;
    }
}
