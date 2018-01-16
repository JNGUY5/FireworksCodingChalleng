function Particle(x, y, hu, num, firework) {

    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;
    this.partNum = num;

    if (this.firework) {
        this.vel = createVector(0, random(-17,-7));
    } else {
      if (this.partNum <= 33){
        if (this.partNum < 15){
        this.vel =  createVector(random(-6, -3), -12);
        }
        else {
        this.vel =  createVector(random(3, 6), -12);
      }
    }
    else if (this.partNum > 33 && this.partNum <= 66){
        if (this.partNum < 48){
        this.vel =  createVector(random(-8, -2), -10);
        }
        else {
        this.vel =  createVector(random(2, 8), -10);
      }
    }
       else if (this.partNum > 66 && this.partNum <= 99){
           this.vel =  createVector(random(-10, 10), -8);
       }
       else if (this.partNum > 99 && this.partNum <= 132){
           this.vel =  createVector(random(-8, 8), -6);
       }
       else if (this.partNum > 132 && this.partNum <= 165){
           this.vel =  createVector(random(-6, 6), -4);
         }
       else if (this.partNum > 165 && this.partNum <= 198){
           this.vel =  createVector(random(-4, 4), -2);
         }
       else if (this.partNum > 198 && this.partNum <= 200){
           this.vel =  createVector(random(-2, 2), 0);
         }
       else{
           this.vel =  createVector(random(-1, 1), random(-1, 1));
       }
  }


    this.acc = createVector(0, 0);

    this.applyForce = function(force) {
      this.acc.add(force);
 }
    this.update = function() {

      if (!this.firework) {
          this.vel.mult(0.9);
          this.lifespan -= 4;
      }

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function() {
      if (this.lifespan < 0) {
          return true;
      } else {
          return false;
      }

  }


  this.show = function() {
    colorMode(HSB);
      if (!this.firework) {
          strokeWeight(2);
          stroke(hu, 255, 255, this.lifespan);
      }
      else {
          strokeWeight(4);
          stroke(hu, 255, 255);
      }

      point(this.pos.x, this.pos.y);
  }
}
