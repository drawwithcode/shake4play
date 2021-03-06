var mySize, energy=0, song, storedShake = 0;

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
  mySize = energy*0.1
  ellipse(0,0,mySize);

  fill(255,0,0);
  textAlign(CENTER);
  textSize(20);
  text(round(storedShake).toLocaleString(), 0, 0);
  text(round(energy).toLocaleString(), 0, 40);

  var incrementCheck = 10
  if (energy > incrementCheck) {
  	if( !song.isPlaying() ) {
  		song.play();
  	}
  	energy=-incrementCheck;
  } else {
  	if ( song.isPlaying() ) { // .isPlaying() returns a boolean
	    song.pause();
		}
  }
}

function deviceShaken(){
	var thisShake = sqrt( pow(accelerationX,2) + pow(accelerationY,2) + pow(accelerationZ,2) );
  energy += thisShake;
  
  if ( thisShake > storedShake ){
  	storedShake = thisShake;
  }
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