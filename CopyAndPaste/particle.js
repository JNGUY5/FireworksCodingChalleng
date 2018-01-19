
function Particle(x,y){
this.pos = createVector(x,y);
this.vel = createVector(0,0);
this.acc = createVector(0,0);


this.applyForce = function(force){
  acc.add(force);
}

  this.update = function(){
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); //clears force

  }
  this.show = function(){
    point(this.pos.x, this.pos.y);
  }

}
