function moveTree(){
	tree.x += tree.speedx;
	tree.y += tree.speedy;
	if(tree.x > width || tree.x < 0){
		tree.speedx = -tree.speedx;
	}
	if(tree.y > height || tree.y < 0){
		tree.speedy = -tree.speedy;
	}
}