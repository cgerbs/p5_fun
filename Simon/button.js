var isLit = false;

function button(x, y, r, g, b){
      this.x = x;
      this.y = y;
      this.r = r;
      this.g = g;
      this.b = b;
      this.lightUpFrames = 50;
      this.lightOnStart;

      this.show = function() {
        if(isLit && (frameCount - this.lightOnStart > this.lightUpFrames)){
          this.lightDown();
        }
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, width/2, height/2);
      }

      this.lightUp = function() {
        this.lightOnStart = frameCount;
        isLit = true;
        if(this.r < 255){
        this.r *= 1.5;
        }
        if(this.g < 255){
        this.g *= 1.5;
        }
        if(this.b < 255){
        this.b *= 1.5;
        }

      }

      this.lightDown = function() {
        isLit = false;
        if(this.r > 255/1.5){
          this.r /= 1.5;
        }
        if(this.g > 255/1.5){
        this.g /= 1.5;
        }
        if(this.b > 255/1.5){
        this.b /= 1.5;
        }
      }

  }
