function Firework() {

  this.firework = new Particle(random(width), height, true);

  this.particles = [];

  this.update = function() {

      this.firework.applyForce(gravity);
      this.firework.update();







    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
    }


  }


      var p = new Particle(this.firework.pos.x, this.firework.pos.y);
      this.particles.push(p)


  this.show = function() {

    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }

  }


}
