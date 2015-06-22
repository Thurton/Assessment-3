//FOR GAMERUN STATE
var BULLET_SPEED = 1.5;
var spawnTimer = 0;
var shootTimer = 0;

if(shootTimer > 0)
		shootTimer -= deltaTime;
	
	for (var i=0; i<bullets.length; i++)
	{
		bullets[i].x += bullets[i].velocityX;
		bullets[i].y += bullets [i].velocityY;
	}
	
	for(var i=0; i<bullets.length; i++)
	{
		if(bullets[i].x < -bullets[i].width ||
			bullets[i].x > SCREEN_WIDTH ||
			bullets[i].y < -bullets[i].height ||
			bullets[i].y > SCREEN_HEIGHT)
		{
			bullets.splice(i, 1);
			break;
		}
	}
	
	//Draw all the bullets
	for(var i=0; i<bullets.length; i++)
	{
		context.drawImage(bullets[i].image,
			bullets[i].x - bullets[i].width/2,
			bullets[i].y - bullets[i].height/2)
	}
	
	for(var i=0; i<enemies.length; i++)
	{
		for(var j=0; j<bullets.length; j++)
		{
			if(intersects(
				bullets[j].x, bullets[j].y,
				bullets[j].width, bullets[j].height,
				enemies[i].x, enemies[i].y,
				enemies[i].width, enemies[i].height) == true)
			{
				enemies.splice(i, 1);
				bullets.splice(j, 1);
				break;
			}
		}
	}
	
	for(var i=0; i<enemies.length; i++)
	{
		if(intersects(
				player.x, player.y,
				player.width, player.height,
				enemies[i].x, enemies[i].y,
				enemies[i].width, enemies[i].height) == true)
			{
				enemies.splice(i, 1);
				player.isDead = true;
				break;
			}
	}


//BULLETS ARRAY
var bullets[]

//BULLETS SHOOT
function playerShoot()
{
	var bullet = {
		image: document.createElement("img"),
		x: player.x,
		y: player.y,
		width: 5,
		height: 5,
		velocityX: 0,
		velocityY: 0
	};
	
	bullet.image.src = "assets/bullet.png"
	
	var velX = 0;
	var velY = 1;
	
	var s = Math.sin(player.rotation);
	var c = Math.cos(player.rotation);
	
	var xVel = (velX * c) - (velY * s);
	var yVel = (velX * s) + (velY * c);
	
	bullet.velocityX = xVel * BULLET_SPEED;
	bullet.velocityY = yVel * BULLET_SPEED;
	
	bullets.push(bullet);
}
	
	