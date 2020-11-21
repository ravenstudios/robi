

class Robi{
	constructor(){
		this.x = GAME_WIDTH / 2;
		this.y = 64;
		this.width = 64;
		this.height = 64;
		this.speed = 5;
		this.yVel = 0
		this.maxYVel = -6
		this.acc = 15
		this.grav = 0.6;
		this.onGround = false;
		this.animationSpeed = 3;
		this.maxAnimationFrames = 5;
		this.currentAnimationFrame = 0;
		this.scale = 2;

	}

	update(){
		this.keyboard()
		this.gravity()
		this.y += this.yVel;
	}

	draw(){
		push();
		translate(this.x, this.y)
		fill(255);
		this.animation()
		image(robiImg, 0, 0, this.width * this.scale, this.height * this.scale, this.currentAnimationFrame * this.width, 0, this.width, this.height);
		pop();

		// push();
		// textSize(32)
		// translate(0, 32);
		// stroke(0, 0, 255)
		// text(`Y Vel: ${this.yVel}`, 0, 0);
		// pop();
	}

	animation(){

		if(frameCount % this.animationSpeed == 0){
			this.currentAnimationFrame = (this.currentAnimationFrame + 1) % this.maxAnimationFrames
		}
	}

	keyboard(){
		//left
		if(keyIsDown(37)){
			this.x += -this.speed
		}
		//right
		if(keyIsDown(39)){
			this.x += this.speed
		}
		//up
		if(keyIsDown(38)){
			this.onGround = false
			if(!this.isJumping){
				this.isJumping = true;

				if(this.yVel > this.maxYVel){
					this.yVel += -this.acc
				}
			}


		}
		//down
		if(keyIsDown(30)){

		}
		//space for jummping
		if(keyIsDown(32)){

		}
	}

	gravity(){
		if(!this.onGround){
			this.yVel += this.grav
		}


		if(this.y + this.height > GAME_HEIGHT - this.height){
			this.yVel = 0
			this.y = GAME_HEIGHT - (this.height * this.scale)
			this.onGround = true
			this.jummping = false;
		}
	}

	jumpReleased(){
		this.isJumping = false;
	}

}
