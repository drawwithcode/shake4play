var size, energy=0, song;

function preload(){
	song = loadSound('assets/j.mp3');
}

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


  if (energy > 1) {
  	if( !song.isPlaying() ) {
  		song.play();
  	}
  	energy --;
  } else {
  	if ( song.isPlaying() ) { // .isPlaying() returns a boolean
	    song.pause();
	}
  }
}

function deviceShaken(){
  energy += abs(accelerationX) + abs(accelerationY) + abs(accelerationZ);
}

// function mousePressed() {
//   if ( song.isPlaying() ) { // .isPlaying() returns a boolean
//     song.stop();
//     background(255,0,0);
//   } else {
//     song.play();
//     background(0,255,0);
//   }
// }