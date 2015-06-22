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

function run()
{
	 context.fillStyle = "#ccc";
	 context.fillRect(0, 0, canvas.width, canvas.height);
	 
	 drawMap();
	 player.draw();
	 
	 //update the frame counter
	 fpsTime += deltaTime;
	 fpsCount++;
	 if(fpstime >= 1)
	 {
		 fpsTime -= 1;
		 fps = fpsCount;
		 fpsCount = 0;
	 }
	 
	//FPS
	 context.fillStyle = "#f00";
	 context.font="12px Arial";
	 context.fillText("FPS: " + fps, 5, 20, 100);

	//SCORE
	 context.fillStyle = "yellow";
	 context.font= "25px Arial";
	 var scoreText = "SCORE: " + score;
	 context.fillText(scoreText, SCREEN_WIDTH - 265, 31);
	 
	//LIFE COUNTER
	 for(var i=0; i<lives; i++)
	 {
	 // 10 is the distance from the top of context
	 // 20 is the gap between the lives icons
		 context.drawImage (heartImage, 30*i, 10);
	 }

}