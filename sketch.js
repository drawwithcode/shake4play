var size, energy=0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setShakeThreshold(10);
}

function draw() {
  background(255);
  translate(width/2,height/2);
  noStroke();
  fill(0);
  ellipse(0,0,energy*0.1);


  energy --;
}

function deviceShaken(){
  energy += abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
}