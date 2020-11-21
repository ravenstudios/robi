
let GAME_WIDTH;
let GAME_HEIGHT;


let robi;
let starManager;

let objects = [];

let robiImg;
let mySound;
const sound = new Audio()
let tapped = false;

function preload() {
  robiImg = loadImage('images/Robi-Sheet.png');
  // soundFormats('mp3', 'ogg');
  // mySound = 'sounds/track_01.mp3';
}

function setup(){
  GAME_WIDTH = displayWidth * 0.7;
  GAME_HEIGHT = displayHeight * 0.7;
  let cnv = createCanvas(GAME_WIDTH, GAME_HEIGHT);
  cnv.parent('canvas');
  cnv.mousePressed(canvasPressed);
	robi = new Robi
  starManager = new StarManager(100)
	objects.push(starManager, robi)

}


function canvasPressed() {
  // playing a sound file on a user gesture
  // is equivalent to `userStartAudio()`
  if(!tapped){
    // mySound.play();
    sound.src = "sounds/track_01.mp3"
    sound.play()
    tapped = true
  }
}




function draw(){

	background(0);
  if (!tapped) {
    let str = "Use the arrow keys to move. Click anywhere to start."
    push();
		textSize(20)
    textAlign(CENTER, CENTER)
		translate(GAME_WIDTH / 2, GAME_HEIGHT / 2);
		fill(255)
    rect(-GAME_WIDTH, -20, GAME_WIDTH * 2, 40)
    fill(0, 0, 255)
		text(str, 0, 0);
		pop();

  }
  else{
    for (obj of objects){
  		obj.draw()
    }

	}

	update();
}

function update(){
	for (obj of objects){
		obj.update()
	}

}

function keyReleased(){
    if (keyCode === UP_ARROW){
      robi.jumpReleased()
    }
    return false; // prevent any default behavior
}

// function keyPressed(){
// 	switch(keyCode){
// 		case UP_ARROW:
//
//
// 			break;
// 		case RIGHT_ARROW:
//
// 			break;
// 		case DOWN_ARROW:
//
// 			break;
// 		case LEFT_ARROW:
//
// 			break;
// 		case 32://space
//
// 			break;
// 		default:
// 			return false;
// 	}
// 	return false;
// }

class Star{
  constructor(x, y, width){
    this.x = x;
    this.y = y;
    this.width = width;
    this.speed = random(-2, -4);

  }

  update(){
    this.y +=  -this.width * 0.7;
    if(this.y + this.width < 0){
      this.x = random(GAME_WIDTH);
      this.y = random(GAME_HEIGHT + 100, GAME_HEIGHT + 300)
    }
  }

  draw(){
    push();
    translate(this.x, this.y)
    fill(255);
    ellipse(this.x, this.y, this.width)
    pop();
  }


}

class StarManager{

  constructor(numOfStars){
    this.stars = []


    for(let i = 0; i < numOfStars; i++){
      let width = random(1, 10)
      let x = random(GAME_WIDTH)
      let y = random(GAME_HEIGHT)
      this.stars.push(new Star(x, y, width))
    }
  }

  update(){
    for (var star of this.stars){
  		star.update()
  	}
  }

  draw(){
    for (var star of this.stars){
  		star.draw()
  	}
  }
}
