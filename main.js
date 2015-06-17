var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");

var startFrameMillis = Date.now();
var endFrameMillis = Date.now();


function getDeltaTime()
{
	endFrameMillis = startFrameMillis;
	startFrameMillis = Date.now();

	var deltaTime = (startFrameMillis - endFrameMillis) * 0.001;
	
		
	if(deltaTime > 1)
		deltaTime = 1;
		
	return deltaTime;
}

var SCREEN_WIDTH = canvas.width;
var SCREEN_HEIGHT = canvas.height;

var KEY_SPACE = 32;
var KEY_LEFT =37;
var KEY_UP = 38;
var KEY_RIGHT = 39;
var KEY_DOWN = 40;
var KEY_A = 65;
var KEY_S = 83;
var KEY_W = 87;
var KEY_D = 68;
var KEY_Q = 81;
var KEY_E = 69;

function run()
{
	//FPS
	 context.fillStyle = "#f00";
	 context.font="12px Arial";
	 context.fillText("FPS: " + fps, 5, 20, 100);



}