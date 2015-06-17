var Bullet = function(x, y)
{
	this.sprite = new Sprite("assets\bullet.png");
	this.sprite = buildAnimation(1, 1, 32, 32, -1, [0]);
	this.sprite.setAnimationOffset (0, 0, 0)
	this.sprite.setLoop(0, false)
	
	this.position = new Vector2();
	this.position.set (x, y);
	
	this.velocity = new Vector2();
	
	
	Bullet.prototype.update = function(dt)
	{
		this.sprite.update(dt);
		this.position.y = Math.floor(this.position.y) + (dt * this.velocity.y);
	}
	
	Bullet.prototype.draw = function()
	{
		var.screenY = this.position.y - worldOffsetY;
		this.sprite.draw(context, screenY, this.position.x)
	}
}