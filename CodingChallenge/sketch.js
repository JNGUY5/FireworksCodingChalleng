var fireworks = [];
var gravity;

function setup() {
	createCanvas(400, 300);
	gravity =createVector(0,0.2);
	stroke(255);
	strokeWeight(4);

}

function draw() {
background(51);
if (random(1)<0.1){
fireworks.push(new Firework());
}
for (var i=0; i<fireworks.length;i++){

	fireworks[i].update();
	fireworks[i].show();

}

}
