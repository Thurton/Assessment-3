var Player = function(){
    this.sprite = new Sprite("assets/player.png");
    this.sprite.buildAnimation(1, 1, 34, 45, 1, [0]);
    this.position = new Vector2(SCREEN_HEIGHT, SCREEN_WIDTH/2);
    this.speed = (METER / 4);
}

Player.prototype.update = function(dt)
{
    var shootTimer = 0.3
    shootTimer -= dt
    if( keyboard.isKeyDown(keyboard.KEY_LEFT) == true || keyboard.isKeyDown(keyboard.KEY_A) == true)
    {
        this.position.x -= this.speed;
    }
    if( keyboard.isKeyDown(keyboard.KEY_RIGHT) == true || keyboard.isKeyDown(keyboard.KEY_D) == true)
    {
        this.position.x += this.speed;
    }
    if( keyboard.isKeyDown(keyboard.KEY_SPACE) == true && shootTimer <=0)
    {
        bullets.push(new Bullet(this.position.x/2, this.position.y));
    }
}

Player.prototype.draw = function()
{
	this.sprite.draw(context, this.position.x, this.position.y);
};