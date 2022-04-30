function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_gameover = loadSound("gameover.wav"); 
	mario_killing = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);

	video= createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet= ml5.poseNet(video, modelLoded);
	poseNet.on('pose', gotPoses);

}

function draw() {
	game();
}


function modelLoded(){
	console.log("Model is loaded");
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results);
		noseX= results[0].pose.nose.x;
		noseY= results[0].pose.nose.y;
		
	}
}



