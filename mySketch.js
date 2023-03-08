let tree = {};

function preload() {
	tree.img = loadImage("baum.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	tree.x = width / 2;
	tree.y = height / 2;
	tree.speedx = 2;
	tree.speedy = 3;
	
	tree.img.resize(200, 0);
	imageMode(CENTER);
}

function draw() {
	background(100);
	image(tree.img, tree.x, tree.y,50,50);
	moveTree();
}

