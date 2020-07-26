function snake() {
    this.x = width / 2;
    this.y = height / 2;
    this.snakeSize = 10;
    this.speedOfSnake = 10;
    this.xspeed = 0;
    this.yspeed = 0;
    this.tail = [];
    this.total = 0;

  this.eat = function(foodPosition) {
        //TODO: write function that will be run when the snake
        //eats or intersects the food
        var distance = dist(this.x, this.y,
            foodPosition.x, foodPosition.y);
        if (distance < 1) {
            this.total++;
            return true;
        } else {
            return false;
        }
    }

  this.gameOver = function() {
        for (var i = 0; i < this.tail.length; i++) {
            var distance = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
            if (distance < 1) {
                //console.log("gameover");

                textSize(32);
                fill(255, 255, 255);

                text("Gameover!", 200, height / 2);
                text("Click to play again!", 150, 350);
                return true; 
            }
        }
        return false;
    }

  this.update = function() {
        if (this.total === this.tail.length) {
            for (var boxPos = 0; boxPos < this.total; boxPos++) {
                this.tail[boxPos] = this.tail[boxPos + 1];
            }
        }
        this.tail[this.total - 1] = createVector(this.x, this.y);

        if (snk.y > height - this.snakeSize) {
            this.y = height - this.snakeSize;
            this.yspeed = 0;
        } else if (snk.y < 0) {
            this.y = 0;
            this.yspeed = 0;
        } else if (snk.x > width - this.snakeSize) {
            this.x = width - this.snakeSize;
            this.xspeed = 0;
        } else if (snk.x < 0) {
            this.x = 0;
            this.xspeed = 0;
        }
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
    }

    this.show = function() {
        fill(255);
        for (var box = 0; box < this.tail.length; box++) {
            rect(this.tail[box].x, this.tail[box].y, this.snakeSize, this.snakeSize);
        }

        stroke(0);
        strokeWeight(1);
        rect(this.x, this.y, this.snakeSize, this.snakeSize);
    }

    this.up = function() {
        this.xspeed = 0;
        this.yspeed = -this.speedOfSnake;
    }

    this.down = function() {
        this.xspeed = 0;
        this.yspeed = this.speedOfSnake;
    }

    this.L = function() {
        this.yspeed = 0;
        this.xspeed = -this.speedOfSnake;
    }

    this.R = function() {
        this.yspeed = 0;
        this.xspeed = this.speedOfSnake;
    }
}
