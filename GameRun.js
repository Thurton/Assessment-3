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
		 context.drawImage (heartImage, 100*i, 660);
	 } 

}