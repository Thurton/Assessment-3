var Enemy1 = function(x, y) {
	
function spawnenemy1()
{
	var type = rand(0, 2);
	
	var enemy1 = {};
	
	enemy1.image = document.createElement("img");
	enemy1.image.src = //add enemy file name;
	enemy1.width = //add enemy width;
	enemy1.height = // add enemy hight;
	
	var x = SCREEN_WIDTH/2;
	var y = SCREEN_HEIGHT/2;
	
	var dirX = rand(-10,10);
	var dirY = rand(-10,10);
	
	var magnitude = (dirX * dirX) + (dirY * dirY);
	if(magnitude !=0)
	{
		var oneOverMag = 1 / Math.sqrt(magnitude);
		dirX *= oneOverMag;
		dirY *= oneOverMag;
	}
	
	var movX = dirX * SCREEN_WIDTH;
	var movY = dirY * SCREEN_HEIGHT;
	
	enemy1.x = x + movX;
	enemy1.y = y + movY;
	
	enemy1.velocityX = -dirX * enemy1_SPEED;
	enemy1.velocityY = -dirY * enemy1_SPEED;
	
	enemy1.push(enemy);
	
}

var Enemy2 = function(x, y) {
	
function spawnenemy2()
{
	var type = rand(0, 2);
	
	var enemy2 = {};
	
	enemy2.image = document.createElement("img");
	enemy2.image.src = //add enemy file name;
	enemy2.width = //add enemy width;
	enemy2.height = // add enemy hight;
	
	var x = SCREEN_WIDTH/2;
	var y = SCREEN_HEIGHT/2;
	
	var dirX = rand(-10,10);
	var dirY = rand(-10,10);
	
	var magnitude = (dirX * dirX) + (dirY * dirY);
	if(magnitude !=0)
	{
		var oneOverMag = 1 / Math.sqrt(magnitude);
		dirX *= oneOverMag;
		dirY *= oneOverMag;
	}
	
	var movX = dirX * SCREEN_WIDTH;
	var movY = dirY * SCREEN_HEIGHT;
	
	enemy2.x = x + movX;
	enemy2.y = y + movY;
	
	enemy2.velocityX = -dirX * enemy1_SPEED;
	enemy2.velocityY = -dirY * enemy1_SPEED;
	
	enemy2.push(enemy);
	
}