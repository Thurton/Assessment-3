var LAYER_COUNT = 2;
var LAYER_BACKGROUND = 0;
var LAYER_ENEMIES = 1;
var MAP = {tw: 25, th: 283};
var TILE = 35;
var TILESET_TILE = TILE * 1;
var TILESET_PADDING = 2;
var TILESET_SPACING = 2;
var TILESET_COUNT_X = 25;
var TILESET_COUNT_Y = 283;
var tileset = document.createElement("img");
tileset.src = "assets/Level1_BG.jpg";
var cells = [];


function Run()
{
	 drawMap();
	 player.draw();
	 
	 //update the frame counter
	 fpsTime += deltaTime;
	 fpsCount++;
	 if(fpstime >= 1)
	 {
		 fpsTime -= 1;
		 fps = fpsCOunt;
		 fpsCOunt = 0;
	 }
	 
	//FPS
	 context.fillStyle = "#f00";
	 context.font = "12px Arial";
	 context.fillText("FPS: " + fps, 5, 20, 100);
	 
	//SCORE
	 context.fillStyle = "yellow";
	 context.font= "20px Arial";
	 var scoreText = "SCORE: " + score;
	 context.fillText(scoreText, SCREEN_WIDTH - 827, 660);
	 
    //LIFE COUNTER
	 for(var i=0; i<lives; i++)
	 {
	 // 10 is the distance from the top of context
	 // 20 is the gap between the lives icons
		 context.drawImage (heartImage, 200*i, 660);
	 } 

}