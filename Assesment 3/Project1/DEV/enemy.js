

var Enemy = function(){
    this.sprite = new Sprite("assets/Enemy1.png");
    this.sprite.buildAnimation(1, 1, 34, 45, 1, [0]);
    this.position = new Vector2(SCREEN_HEIGHT, SCREEN_WIDTH/2);
    this.speed = (SCREEN_WIDTH / 10);
	
	
	
	this.width = 30;
	this.height = 28;
	
	this.position = new Vector2();
	this.position.set(x, y);
	
	this.velocity = new Vector2();
	
	this.moveRight = true;
	this.pause = 0;
}




Enemy.prototype.update = function(dt)
{
	
}
	
	Enemy.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x - worldOffsetX, this.position.y);
}

	
	
