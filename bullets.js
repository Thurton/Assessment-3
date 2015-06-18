var BULLET_UP = 0
var BULLET_DOWN = 1
var Bullet = function(x, y, moveRight, moveUp)
{
    this.sprite = new Sprite("assets/bullet.png");
    this.sprite.buildAnimation(2, 1, 34, 17, 0.2, [1]);
    this.position = new Vector2(x, y);
    this.velocity = new Vector2();
    
    this.moveRight = moveRight;
    if(this.moveRight == true)
        this.velocity.set(MAXDX *0, 2);
    else
        this.velocity.set(-MAXDX *0, 2);
    if (this.velocity.x > 0)
    {
        this.sprite.setAnimation(BULLET_UP);
    }
    if (this.velocity.x < 0)
    {
        this.sprite.setAnimation(BULLET_UP);
    }
	
	this.moveUp = moveUp;
    if(this.moveUp == true)
        this.velocity.set(MAXDX *0, 2);
    else
        this.velocity.set(-MAXDX *0, 2);
    if (this.velocity.x > 0)
    {
        this.sprite.setAnimation(BULLET_UP);
    }
    if (this.velocity.x < 0)
    {
        this.sprite.setAnimation(BULLET_UP);
    }
}

Bullet.prototype.update = function(dt)
{
    this.sprite.update(dt);
    this.position.y = Math.floor(this.position.y + (dt * this.velocity.y));
}

Bullet.prototype.draw = function()
{
    var screenY = this.position.y - worldOffsetY;
    this.sprite.draw(context, screenY, this.position.x);



// For Main.js

var bullets = [];
var MAXDX = METER * 10;
var MAXDY = METER * 15;
var ACCEL = MAXDX * 2;
