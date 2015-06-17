var Player = function(){
    this.sprite = new Sprite("assets/player.png");
    this.sprite.buildAnimation(1, 1, 34, 45, 1, [0]);
    this.position = new Vector2(SCREEN_HEIGHT, SCREEN_WIDTH/2);
    this.speed = (METER / 2)
}

Player.prototype.update = function(dt)
{
    if( keyboard.isKeyDown(keyboard.KEY_LEFT) == true || keyboard.isKeyDown(keyboard.KEY_A) == true)
    {
        this.position.x -= this.speed;
    }
}

Player.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x, this.position.y);
};