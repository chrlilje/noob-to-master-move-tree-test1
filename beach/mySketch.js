let catImg;
function preload(){
	catImg = loadImage("beachball.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	
	image(catImg, 100,100);
}