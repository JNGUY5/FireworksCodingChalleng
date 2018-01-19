var firework;

function setup() {
	createCanvas(400,300);
	stroke(255);
	strokeWeight(4);
	firework = new Particle(200,200);

}

function draw() {
	background(51);
	firework.update();
	firework.show();


}
